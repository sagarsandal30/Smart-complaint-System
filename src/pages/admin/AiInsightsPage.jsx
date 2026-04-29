import React from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import { Brain, AlertCircle, TrendingUp } from 'lucide-react';

const AiInsightsPage = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <div className="flex items-center gap-2 mb-6">
            <Brain size={28} color="var(--color-primary)" />
            <h1 className="text-2xl font-bold">AI Insights</h1>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                <AlertCircle size={20} color="var(--color-warning)" /> Duplicate Clusters
              </h2>
              <div className="flex flex-col gap-3">
                <div className="p-3 border rounded" style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                  <p className="font-semibold mb-1">Water Leakage in Ward 2</p>
                  <p className="text-sm text-muted">Detected 5 similar complaints in the last 24 hours.</p>
                  <button className="btn btn-outline mt-2" style={{ padding: '2px 8px', fontSize: '0.75rem' }}>Review & Merge (5)</button>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                <TrendingUp size={20} color="var(--color-danger)" /> Predictive Analysis
              </h2>
              <div className="flex flex-col gap-3">
                <div className="p-3 border rounded" style={{ border: '1px solid var(--color-danger)', backgroundColor: 'var(--color-danger-bg)', borderRadius: 'var(--radius-md)' }}>
                  <p className="font-semibold mb-1" style={{ color: 'var(--color-danger)' }}>High Risk: Drainage Ward 4</p>
                  <p className="text-sm">Based on historical data and weather forecast, expect a 40% spike in drainage complaints over the next 3 days.</p>
                </div>
              </div>
            </div>

            <div className="card" style={{ gridColumn: 'span 2' }}>
              <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                <Brain size={20} color="var(--color-info)" /> Fake Complaint Detection
              </h2>
              <div className="p-4 border rounded" style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                <p className="text-muted">No high-risk fake complaints detected today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AiInsightsPage;
