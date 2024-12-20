import React from 'react'
import { Home, Wallet, Plus, User } from 'lucide-react'

interface BottomNavigationProps {
  onAddExpenseClick: () => void
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ onAddExpenseClick }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-around p-2">
          <button className="flex flex-col items-center p-2 text-violet-600" aria-label="Home">
            <Home className="h-6 w-6" />
            <span className="mt-1 text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-500" aria-label="Wallet">
            <Wallet className="h-6 w-6" />
            <span className="mt-1 text-xs">Wallet</span>
          </button>
          <div className="relative flex items-center justify-center">
            <button 
              className="absolute -top-7 flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg"
              aria-label="Add expense"
              onClick={onAddExpenseClick}
            >
              <Plus className="h-6 w-6" />
            </button>
          </div>
          <button className="flex flex-col items-center p-2 text-gray-500" aria-label="Stats">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="mt-1 text-xs">Stats</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-500" aria-label="Profile">
            <User className="h-6 w-6" />
            <span className="mt-1 text-xs">Profile</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default BottomNavigation