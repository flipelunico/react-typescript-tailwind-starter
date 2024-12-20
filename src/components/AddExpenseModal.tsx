import React from 'react'
import { X, DollarSign, Calendar, Tag } from 'lucide-react'

interface AddExpenseModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (e: React.FormEvent) => void
}

const AddExpenseModal: React.FC<AddExpenseModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md transform transition-all ease-in-out duration-300 scale-100 opacity-100">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Add New Expense</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close add expense"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <form onSubmit={onSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="expense-name" className="block text-sm font-medium text-gray-700">Expense Name</label>
                <input type="text" id="expense-name" name="expense-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500" required />
              </div>
              <div>
                <label htmlFor="expense-amount" className="block text-sm font-medium text-gray-700">Amount</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="number" id="expense-amount" name="expense-amount" className="block w-full pl-10 rounded-md border-gray-300 focus:border-violet-500 focus:ring-violet-500" placeholder="0.00" required />
                </div>
              </div>
              <div>
                <label htmlFor="expense-date" className="block text-sm font-medium text-gray-700">Date</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="date" id="expense-date" name="expense-date" className="block w-full pl-10 rounded-md border-gray-300 focus:border-violet-500 focus:ring-violet-500" required />
                </div>
              </div>
              <div>
                <label htmlFor="expense-category" className="block text-sm font-medium text-gray-700">Category</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Tag className="h-5 w-5 text-gray-400" />
                  </div>
                  <select id="expense-category" name="expense-category" className="block w-full pl-10 rounded-md border-gray-300 focus:border-violet-500 focus:ring-violet-500">
                    <option>Food</option>
                    <option>Transportation</option>
                    <option>Entertainment</option>
                    <option>Bills</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                Add Expense
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddExpenseModal