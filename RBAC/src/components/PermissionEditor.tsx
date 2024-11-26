import { useState } from 'react';
import { Button, Checkbox, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, useToast } from './ui';
import { permissions } from '../lib/mockData';

export function PermissionEditor() {
  const [permissionList, setPermissionList] = useState(permissions);
  const { toast } = useToast();

  const updatePermission = (id: number, field: 'read' | 'write' | 'delete', value: boolean) => {
    setPermissionList(permissionList.map(permission => 
      permission.id === id ? { ...permission, [field]: value } : permission
    ));
    toast({
      title: "Permission updated",
      description: "The permission has been successfully updated.",
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Permissions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Resource</TableHead>
            <TableHead>Read</TableHead>
            <TableHead>Write</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {permissionList.map((permission) => (
            <TableRow key={permission.id}>
              <TableCell>{permission.name}</TableCell>
              <TableCell>
                <Checkbox
                  checked={permission.read}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updatePermission(permission.id, 'read', e.target.checked)}
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={permission.write}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updatePermission(permission.id, 'write', e.target.checked)}
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={permission.delete}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updatePermission(permission.id, 'delete', e.target.checked)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

