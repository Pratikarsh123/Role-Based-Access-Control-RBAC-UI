import { Bell, User } from 'lucide-react'

export function HeaderNav() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">RBAC Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <Bell size={20} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

