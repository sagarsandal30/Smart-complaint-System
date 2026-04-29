import React from 'react';
import { PackageOpen } from 'lucide-react';

const EmptyState = ({ title, message, icon: Icon = PackageOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center glass rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', border: '1px dashed var(--color-border)' }}>
      <div className="mb-4 p-4 rounded-full" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
        <Icon size={48} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted text-sm max-w-sm mx-auto">{message}</p>
    </div>
  );
};
export default EmptyState;
