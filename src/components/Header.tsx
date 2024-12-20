import React from 'react'
import { Bell, Grid } from 'lucide-react'

interface HeaderProps {
  onNotificationsClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onNotificationsClick }) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b">
      <button className="rounded-lg p-2 hover:bg-gray-100 transition-colors duration-200" aria-label="Menu">
        <Grid className="h-6 w-6 text-gray-600" />
      </button>
      <h1 className="text-lg font-semibold text-gray-800">Home</h1>
      <button 
        className="relative rounded-lg p-2 hover:bg-gray-100 transition-colors duration-200" 
        aria-label="Notifications"
        onClick={onNotificationsClick}
      >
        <Bell className="h-6 w-6 text-gray-600" />
        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" aria-hidden="true" />
      </button>
    </header>
  )
}

export default Header