import React from 'react'

interface Transaction {
  id: number
  name: string
  time: string
  amount: number
  icon: string
}

interface TransactionsListProps {
  transactions: Transaction[]
}

const TransactionsList: React.FC<TransactionsListProps> = ({ transactions }) => {
  return (
    <div className="flex-1 overflow-y-auto px-4 pb-20 max-h-[calc(100vh-350px)]">
      <div className="space-y-4 pt-6">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
                transaction.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {transaction.icon}
              </div>
              <div>
                <div className="font-medium">{transaction.name}</div>
                <div className="text-sm text-gray-500">{transaction.time}</div>
              </div>
            </div>
            <div className={`text-right font-medium ${
              transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionsList