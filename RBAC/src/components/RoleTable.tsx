import React, { useState } from 'react';
import { roles } from '../lib/mockData';

// Input validation function
const validateInput = (input: string): boolean => {
  // Basic XSS prevention: no <script> tags or on* attributes
  const dangerousPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|on\w+=/i;
  return !dangerousPattern.test(input);
};

export function RoleTable() {
  const [roleList, setRoleList] = useState(roles);
  const [newRole, setNewRole] = useState({ name: '', description: '' });
  const [error, setError] = useState<string | null>(null);

  const addRole = () => {
    setError(null); // Reset error state

    // Input validation
    if (!validateInput(newRole.name) || !validateInput(newRole.description)) {
      setError("Invalid input detected. Please check your entries.");
      return;
    }

    if (newRole.name && newRole.description) {
      try {
        setRoleList([...roleList, { ...newRole, id: roleList.length + 1 }]);
        setNewRole({ name: '', description: '' });
      } catch (err) {
        console.error("Error adding role:", err);
        setError("An error occurred while adding the role. Please try again.");
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  const deleteRole = (id: number) => {
    try {
      setRoleList(roleList.filter(role => role.id !== id));
    } catch (err) {
      console.error("Error deleting role:", err);
      setError("An error occurred while deleting the role. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Roles</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="row g-3 mb-4" onSubmit={(e) => e.preventDefault()}>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Role Name"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            maxLength={50} // Limit input length
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={newRole.description}
            onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
            maxLength={200} // Limit input length
          />
        </div>
        <div className="col-md-4">
          <button type="button" className="btn btn-primary" onClick={addRole}>Add Role</button>
        </div>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roleList.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.description}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteRole(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

