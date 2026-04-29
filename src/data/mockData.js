export const mockUser = {
  id: 'u1',
  name: 'Rahul Sharma',
  email: 'rahul@example.com',
  phone: '9876543210',
  role: 'citizen' // Can be citizen, worker, admin
};

export const mockComplaints = [
  {
    id: 'c1',
    title: 'Overflowing Garbage Bin',
    description: 'The garbage bin near the main square has been overflowing for 3 days.',
    category: 'Garbage',
    ward: 'Ward 5',
    address: 'Main Square, MG Road',
    lat: 18.5204,
    lng: 73.8567,
    status: 'Pending',
    priority: 'Medium',
    upvotes: 24,
    createdAt: '2026-04-20T10:00:00Z',
    image: 'https://placehold.co/600x400/png',
    citizenId: 'u1',
    assignedTo: null,
    timeline: [
      { status: 'Pending', timestamp: '2026-04-20T10:00:00Z' }
    ]
  },
  {
    id: 'c2',
    title: 'Severe Water Leakage',
    description: 'Main water pipe burst flooding the street.',
    category: 'Water Leakage',
    ward: 'Ward 2',
    address: 'FC Road',
    lat: 18.5254,
    lng: 73.8500,
    status: 'In Progress',
    priority: 'High',
    upvotes: 56,
    createdAt: '2026-04-25T08:30:00Z',
    image: 'https://placehold.co/600x400/png',
    citizenId: 'u2',
    assignedTo: 'w1',
    timeline: [
      { status: 'Pending', timestamp: '2026-04-25T08:30:00Z' },
      { status: 'In Progress', timestamp: '2026-04-26T09:15:00Z' }
    ]
  },
  {
    id: 'c3',
    title: 'Broken Streetlight',
    description: 'Streetlight pole 45 is entirely dark.',
    category: 'Streetlight',
    ward: 'Ward 5',
    address: 'Street 4, Kalyani Nagar',
    lat: 18.5404,
    lng: 73.9067,
    status: 'Resolved',
    priority: 'Low',
    upvotes: 5,
    createdAt: '2026-04-10T14:20:00Z',
    image: 'https://placehold.co/600x400/png',
    citizenId: 'u1',
    assignedTo: 'w2',
    timeline: [
      { status: 'Pending', timestamp: '2026-04-10T14:20:00Z' },
      { status: 'In Progress', timestamp: '2026-04-11T10:00:00Z' },
      { status: 'Resolved', timestamp: '2026-04-12T16:45:00Z' }
    ]
  }
];

export const mockAnalytics = {
  byCategory: [
    { name: 'Garbage', value: 400 },
    { name: 'Water', value: 300 },
    { name: 'Roads', value: 300 },
    { name: 'Electricity', value: 200 }
  ],
  byWard: [
    { name: 'Ward 1', count: 120 },
    { name: 'Ward 2', count: 80 },
    { name: 'Ward 3', count: 150 },
    { name: 'Ward 4', count: 90 }
  ]
};
