import { RoleTable } from '@/components/RoleTable'
import { PermissionEditor } from '@/components/PermissionEditor'

export default function Roles() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Roles and Permissions Management</h1>
      <RoleTable />
      <PermissionEditor />
    </div>
  )
}

