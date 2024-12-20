import React from 'react'

interface BalanceCardProps {
  balance: number
  income: number
  expenses: number
}

const BalanceCard: React.FC<BalanceCardProps> = ({ balance, income, expenses }) => {
  return (
    <div className="px-4 pt-4 pb-6">
      <div className="rounded-3xl bg-gradient-to-r from-violet-500 via-purple-500 to-orange-400 p-6 text-white">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm">Total Balance</span>
          <button className="rounded-full p-1 hover:bg-white/10" aria-label="More options">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold">${balance.toFixed(2)}</h2>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-1 text-sm">
              <svg className="h-4 w-4 rotate-180 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Income
            </div>
            <div className="text-lg font-semibold">${income.toFixed(2)}</div>
          </div>
          <div>
            <div className="flex items-center gap-1 text-sm">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Expenses
            </div>
            <div className="text-lg font-semibold">${expenses.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalanceCard