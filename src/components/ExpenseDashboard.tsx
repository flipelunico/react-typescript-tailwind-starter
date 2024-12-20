import React, { useState } from 'react'
import Header from './Header'
import BalanceCard from './BalanceCard'
import TransactionsList from './TransactionsList'
import BottomNavigation from './BottomNavigation'
import AddExpenseModal from './AddExpenseModal'

const ExpenseDashboard: React.FC = () => {
  const [balance, setBalance] = useState(3257.00)
  const [income, setIncome] = useState(2350.00)
  const [expenses, setExpenses] = useState(950.00)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showAddExpense, setShowAddExpense] = useState(false)

  const transactions = [
    { id: 1, name: 'Money Transfer', time: '12:35 PM', amount: -450, icon: '👤' },
    { id: 2, name: 'Paypal', time: '10:20 AM', amount: 1200, icon: 'P' },
    { id: 3, name: 'Uber', time: '08:40AM', amount: -150, icon: 'U' },
    { id: 4, name: 'Bata Store', time: 'Yesterday', amount: -200, icon: '🛍️' },
    { id: 5, name: 'Bank Transfer', time: 'Yesterday', amount: -600, icon: '🏦' },
  ]

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setShowAddExpense(false)
  }

  return (
    <div className="h-screen bg-white flex flex-col">
      <div className="mx-auto w-full max-w-md flex-1 flex flex-col">
        <div className="sticky top-0 z-10 bg-white">
          <Header onNotificationsClick={() => setShowNotifications(!showNotifications)} />
          <BalanceCard balance={balance} income={income} expenses={expenses} />
          <div className="px-4 py-2 bg-white border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Transactions</h3>
              <button className="text-sm text-gray-500 hover:text-gray-700">See All</button>
            </div>
          </div>
        </div>
        <TransactionsList transactions={transactions} />
      </div>
      <BottomNavigation onAddExpenseClick={() => setShowAddExpense(true)} />
      <AddExpenseModal 
        isOpen={showAddExpense}
        onClose={() => setShowAddExpense(false)}
        onSubmit={handleAddExpense}
      />
    </div>
  )
}

export default ExpenseDashboard