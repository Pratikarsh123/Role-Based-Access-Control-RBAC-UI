'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

type Permission = {
  id: number
  name: string
  read: boolean
  write: boolean
  delete: boolean
}

const initialPermissions: Permission[] = [
  { id: 1, name: 'Users', read: true, write: true, delete: true },
  { id: 2, name: 'Roles', read: true, write: true, delete: false },
  { id: 3, name: 'Settings', read: true, write: false, delete: false },
]

export default function PermissionsPage() {
  const [permissions, setPermissions] = useState<Permission[]>(initialPermissions)
  const { toast } = useToast()

  const updatePermission = (id: number, field: 'read' | 'write' | 'delete', value: boolean) => {
    setPermissions(permissions.map(permission => 
      permission.id === id ? { ...permission, [field]: value } : permission
    ))
    toast({
      title: "Permission updated",
      description: "The permission has been successfully updated.",
    })
  }

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
          {permissions.map((permission) => (
            <TableRow key={permission.id}>
              <TableCell>{permission.name}</TableCell>
              <TableCell>
                <Checkbox
                  checked={permission.rea
}
                  onCheckedChange={(checked) => updatePermission(permission.id, 'read', checked as boolean)}
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={permission.write}
                  onCheckedChange={(checked) => updatePermission(permission.id, 'write', checked as boolean)}
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={permission.delete}
                  onCheckedChange={(checked) => updatePermission(permission.id, 'delete', checked as boolean)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

