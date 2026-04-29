import React from 'react';
import { getStatusColor, getStatusBg } from '../../utils/statusColors';

const StatusBadge = ({ status }) => {
  return (
    <span style={{
      backgroundColor: getStatusBg(status),
      color: getStatusColor(status),
      padding: '4px 8px',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      display: 'inline-block'
    }}>
      {status}
    </span>
  );
};
export default StatusBadge;
