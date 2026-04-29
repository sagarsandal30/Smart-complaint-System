export const getStatusColor = (status) => {
  switch (status) {
    case 'Pending': return 'var(--color-warning)';
    case 'In Progress': return 'var(--color-info)';
    case 'Resolved': return 'var(--color-success)';
    case 'Escalated': return 'var(--color-danger)';
    default: return 'var(--color-text-muted)';
  }
};

export const getStatusBg = (status) => {
  switch (status) {
    case 'Pending': return 'var(--color-warning-bg)';
    case 'In Progress': return 'var(--color-info-bg)';
    case 'Resolved': return 'var(--color-success-bg)';
    case 'Escalated': return 'var(--color-danger-bg)';
    default: return 'var(--color-bg-main)';
  }
};

export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High': return 'var(--color-danger)';
    case 'Medium': return 'var(--color-warning)';
    case 'Low': return 'var(--color-success)';
    default: return 'var(--color-text-muted)';
  }
};
