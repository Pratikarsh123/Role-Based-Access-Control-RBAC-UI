import Link from 'next/link'
import { Users, Shield } from 'lucide-react'

export function SidebarNav() {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link href="/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Users className="inline-block mr-2" size={20} />
          Users
        </Link>
        <Link href="/roles" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Shield className="inline-block mr-2" size={20} />
          Roles & Permissions
        </Link>
      </nav>
    </div>
  )
}

