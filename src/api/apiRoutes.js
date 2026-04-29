export const API_BASE_URL = 'http://localhost:5000/api';

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register'
  },
  COMPLAINTS: {
    BASE: '/complaints',
    BY_ID: (id) => `/complaints/${id}`,
    STATUS: (id) => `/complaints/${id}/status`,
    ASSIGN: (id) => `/complaints/${id}/assign`,
    UPVOTE: (id) => `/complaints/${id}/upvote`,
    ESCALATE: (id) => `/complaints/${id}/escalate`,
    MERGE: '/complaints/merge'
  },
  ANALYTICS: {
    DASHBOARD: '/analytics/dashboard'
  },
  NOTIFICATIONS: {
    BASE: '/notifications'
  },
  AI: {
    INSIGHTS: '/ai/insights'
  }
};
