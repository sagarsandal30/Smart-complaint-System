import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color = 'var(--color-primary)', trend }) => {
  return (
    <div className="card glass relative overflow-hidden" style={{ overflow: 'hidden' }}>
      <div className="flex justify-between items-start mb-2">
        <div style={{ backgroundColor: `${color}15`, color: color, padding: '12px', borderRadius: 'var(--radius-md)' }}>
          <Icon size={24} />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: trend > 0 ? 'var(--color-success)' : 'var(--color-danger)' }}>
            {trend > 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <div>
        <div className="text-sm font-medium text-muted mt-2">{title}</div>
        <div className="text-2xl font-bold mt-1" style={{ color: 'var(--color-text-main)' }}>{value}</div>
      </div>
      {/* Decorative gradient blob */}
      <div style={{
        position: 'absolute', top: '-10px', right: '-10px', width: '60px', height: '60px',
        background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
        borderRadius: '50%', zIndex: '-1'
      }} />
    </div>
  );
};
export default StatCard;
