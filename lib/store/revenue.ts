import { create } from 'zustand'

interface Revenue {
  id: string
  date: string
  game: string
  type: string
  amount: string
  status: 'success' | 'pending' | 'failed'
}

interface RevenueStats {
  totalRevenue: string
  monthlyRevenue: string
  paidUsers: string
  arpu: string
}

interface RevenueState {
  transactions: Revenue[]
  stats: RevenueStats
  loading: boolean
  error: string | null
  setTransactions: (transactions: Revenue[]) => void
  setStats: (stats: RevenueStats) => void
  addTransaction: (transaction: Revenue) => void
  updateTransaction: (id: string, transaction: Partial<Revenue>) => void
  fetchTransactions: () => Promise<void>
  fetchStats: () => Promise<void>
}

export const useRevenueStore = create<RevenueState>((set) => ({
  transactions: [],
  stats: {
    totalRevenue: '¥0',
    monthlyRevenue: '¥0',
    paidUsers: '0',
    arpu: '¥0',
  },
  loading: false,
  error: null,
  setTransactions: (transactions) => set({ transactions }),
  setStats: (stats) => set({ stats }),
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [...state.transactions, transaction],
    })),
  updateTransaction: (id, updatedTransaction) =>
    set((state) => ({
      transactions: state.transactions.map((transaction) =>
        transaction.id === id
          ? { ...transaction, ...updatedTransaction }
          : transaction
      ),
    })),
  fetchTransactions: async () => {
    set({ loading: true, error: null })
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/revenue/transactions')
      const data = await response.json()
      set({ transactions: data, loading: false })
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
  fetchStats: async () => {
    set({ loading: true, error: null })
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/revenue/stats')
      const data = await response.json()
      set({ stats: data, loading: false })
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
})) 
