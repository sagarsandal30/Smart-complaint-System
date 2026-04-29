import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  MapPin, 
  Brain, 
  Bell, 
  AlertTriangle,
  KanbanSquare
} from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <aside className="sidebar">
      <div className="sidebar-category">Menu</div>
      <nav className="flex flex-col">
        {user.role === 'citizen' && (
          <>
            <NavLink to="/citizen/dashboard" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <LayoutDashboard size={20} /> Dashboard
            </NavLink>
            <NavLink to="/citizen/create" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <PlusCircle size={20} /> New Complaint
            </NavLink>
          </>
        )}
        
        {user.role === 'worker' && (
          <>
            <NavLink to="/worker/dashboard" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <KanbanSquare size={20} /> Task Board
            </NavLink>
          </>
        )}

        {user.role === 'admin' && (
          <>
            <NavLink to="/admin/dashboard" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <LayoutDashboard size={20} /> Overview
            </NavLink>
            <NavLink to="/admin/analytics" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <MapPin size={20} /> Analytics
            </NavLink>
            <NavLink to="/admin/escalations" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <AlertTriangle size={20} /> Escalations
            </NavLink>
            <NavLink to="/admin/ai-insights" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
              <Brain size={20} /> AI Insights
            </NavLink>
          </>
        )}

        <div className="sidebar-category" style={{ marginTop: 'var(--spacing-4)' }}>Settings</div>
        <NavLink to="/notifications" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <Bell size={20} /> Notifications
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <FileText size={20} /> Profile
        </NavLink>
      </nav>
    </aside>
  );
};
export default Sidebar;
