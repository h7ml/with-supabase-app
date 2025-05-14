import { create } from 'zustand'

interface UserStats {
  totalUsers: string
  activeUsers: string
  payRate: string
  newUsers: string
}

interface UserRetention {
  day: string
  retention: number
}

interface UserDistribution {
  name: string
  value: number
}

interface UsersState {
  stats: UserStats
  retention: UserRetention[]
  distribution: UserDistribution[]
  loading: boolean
  error: string | null
  setStats: (stats: UserStats) => void
  setRetention: (retention: UserRetention[]) => void
  setDistribution: (distribution: UserDistribution[]) => void
  fetchStats: () => Promise<void>
  fetchRetention: () => Promise<void>
  fetchDistribution: () => Promise<void>
}

export const useUsersStore = create<UsersState>((set) => ({
  stats: {
    totalUsers: '0',
    activeUsers: '0',
    payRate: '0%',
    newUsers: '0',
  },
  retention: [],
  distribution: [],
  loading: false,
  error: null,
  setStats: (stats) => set({ stats }),
  setRetention: (retention) => set({ retention }),
  setDistribution: (distribution) => set({ distribution }),
  fetchStats: async () => {
    set({ loading: true, error: null })
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/users/stats')
      const data = await response.json()
      set({ stats: data, loading: false })
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
  fetchRetention: async () => {
    set({ loading: true, error: null })
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/users/retention')
      const data = await response.json()
      set({ retention: data, loading: false })
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
  fetchDistribution: async () => {
    set({ loading: true, error: null })
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/users/distribution')
      const data = await response.json()
      set({ distribution: data, loading: false })
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
})) 
