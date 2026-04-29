import React from 'react';
import { getPriorityColor } from '../../utils/statusColors';

const PriorityBadge = ({ priority }) => {
  return (
    <span style={{
      color: getPriorityColor(priority),
      border: `1px solid ${getPriorityColor(priority)}`,
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      display: 'inline-block'
    }}>
      {priority}
    </span>
  );
};
export default PriorityBadge;
