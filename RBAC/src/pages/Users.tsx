import { UserTable } from '../components/UserTable';

export function Users() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Users Management</h1>
      <UserTable />
    </div>
  );
}
