import React from 'react';
import { Loader as SpinnerIcon } from 'lucide-react';

const Loader = ({ fullScreen }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: fullScreen ? '100vh' : '100%',
      width: '100%'
    }}>
      <div className="spinner">
        <SpinnerIcon size={32} color="var(--color-primary)" />
      </div>
    </div>
  );
};
export default Loader;
