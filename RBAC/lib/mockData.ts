export const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
]

export const roles = [
  { id: 1, name: 'Admin', description: 'Full access to all features' },
  { id: 2, name: 'Editor', description: 'Can edit and publish content' },
  { id: 3, name: 'Viewer', description: 'Can only view content' },
]

export const permissions = [
  { id: 1, name: 'Users', read: true, write: true, delete: true },
  { id: 2, name: 'Roles', read: true, write: true, delete: false },
  { id: 3, name: 'Settings', read: true, write: false, delete: false },
]

