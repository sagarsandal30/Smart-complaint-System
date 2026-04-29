import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import ChartCard from '../../components/charts/ChartCard';
import { mockAnalytics } from '../../data/mockData';

const COLORS = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-success)', 'var(--color-warning)', 'var(--color-info)'];

const AnalyticsDashboard = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <h1 className="text-2xl font-bold mb-6">Detailed Analytics</h1>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <ChartCard title="Complaints by Category" filters={['Last 7 Days', 'Last 30 Days', 'This Year']}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockAnalytics.byCategory}>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={1}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-text-muted)' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--color-text-muted)' }} dx={-10} />
                  <Tooltip cursor={{ fill: 'rgba(0,0,0,0.02)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)' }} />
                  <Bar dataKey="value" fill="url(#colorGradient)" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Ward-wise Distribution" filters={['All Categories', 'High Priority']}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mockAnalytics.byWard}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="count"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {mockAnalytics.byWard.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(255,255,255,0.8)" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)' }} />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnalyticsDashboard;
