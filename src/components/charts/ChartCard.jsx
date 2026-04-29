import React from 'react';

const ChartCard = ({ title, children, filters }) => {
  return (
    <div className="card glass flex flex-col h-full" style={{ minHeight: '300px' }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">{title}</h3>
        {filters && (
          <select className="select" style={{ width: 'auto', padding: '4px 8px', fontSize: '12px', minWidth: '120px' }}>
            {filters.map(f => <option key={f}>{f}</option>)}
          </select>
        )}
      </div>
      <div className="flex-1 w-full relative" style={{ minHeight: '260px', height: '100%' }}>
        {children}
      </div>
    </div>
  );
};
export default ChartCard;
