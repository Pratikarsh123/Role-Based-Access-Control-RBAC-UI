import React, { useState } from 'react';
import { users } from '../lib/mockData';

// Input validation function
const validateInput = (input: string): boolean => {
  // Basic XSS prevention: no <script> tags or on* attributes
  const dangerousPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|on\w+=/i;
  return !dangerousPattern.test(input);
};

export function UserTable() {
  const [userList, setUserList] = useState(users);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });
  const [error, setError] = useState<string | null>(null);

  const addUser = () => {
    setError(null); // Reset error state

    // Input validation
    if (!validateInput(newUser.name) || !validateInput(newUser.email) || !validateInput(newUser.role)) {
      setError("Invalid input detected. Please check your entries.");
      return;
    }

    if (newUser.name && newUser.email && newUser.role) {
      try {
        setUserList([...userList, { ...newUser, id: userList.length + 1 }]);
        setNewUser({ name: '', email: '', role: '' });
      } catch (err) {
        console.error("Error adding user:", err);
        setError("An error occurred while adding the user. Please try again.");
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  const deleteUser = (id: number) => {
    try {
      setUserList(userList.filter(user => user.id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
      setError("An error occurred while deleting the user. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Users</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="row g-3 mb-4" onSubmit={(e) => e.preventDefault()}>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            maxLength={50} // Limit input length
          />
        </div>
        <div className="col-md-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            maxLength={100} // Limit input length
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            maxLength={50} // Limit input length
          />
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-primary" onClick={addUser}>Add User</button>
        </div>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

