import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Public Pages
import LandingPage from '../pages/public/LandingPage';
import PublicComplaintsPage from '../pages/public/PublicComplaintsPage';
import ComplaintDetailsPage from '../pages/common/ComplaintDetailsPage';

// Auth
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';

// Common
import NotificationsPage from '../pages/common/NotificationsPage';
import ProfilePage from '../pages/common/ProfilePage';

// Citizen
import CitizenDashboard from '../pages/citizen/CitizenDashboard';
import CreateComplaintPage from '../pages/citizen/CreateComplaintPage';

// Worker
import WorkerDashboard from '../pages/worker/WorkerDashboard';

// Admin
import AdminDashboard from '../pages/admin/AdminDashboard';
import AnalyticsDashboard from '../pages/admin/AnalyticsDashboard';
import EscalationPage from '../pages/admin/EscalationPage';
import AiInsightsPage from '../pages/admin/AiInsightsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/public/complaints" element={<PublicComplaintsPage />} />
      <Route path="/complaints/:id" element={<ComplaintDetailsPage />} />
      
      {/* Protected Routes - Common */}
      <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      
      {/* Citizen Routes */}
      <Route path="/citizen/dashboard" element={<ProtectedRoute allowedRoles={['citizen']}><CitizenDashboard /></ProtectedRoute>} />
      <Route path="/citizen/create" element={<ProtectedRoute allowedRoles={['citizen']}><CreateComplaintPage /></ProtectedRoute>} />

      {/* Worker Routes */}
      <Route path="/worker/dashboard" element={<ProtectedRoute allowedRoles={['worker']}><WorkerDashboard /></ProtectedRoute>} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/analytics" element={<ProtectedRoute allowedRoles={['admin']}><AnalyticsDashboard /></ProtectedRoute>} />
      <Route path="/admin/escalations" element={<ProtectedRoute allowedRoles={['admin']}><EscalationPage /></ProtectedRoute>} />
      <Route path="/admin/ai-insights" element={<ProtectedRoute allowedRoles={['admin']}><AiInsightsPage /></ProtectedRoute>} />

      {/* Fallback */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};
export default AppRoutes;
