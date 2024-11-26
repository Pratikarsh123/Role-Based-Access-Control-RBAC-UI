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
import { permissions } from '@/lib/mockData'

export function PermissionEditor() {
  const [permissionList, setPermissionList] = useState(permissions)
  const { toast } = useToast()

  const updatePermission = (id: number, field: 'read' | 'write' | 'delete', value: boolean) => {
    setPermissionList(permissionList.map(permission => 
      permission.id === id ? { ...permission, [field]: value } : permission
    ))
    toast({
      title: "Permission updated",
      description: "The permission has been successfully updated.",
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bol
">Permissions</h2>
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

