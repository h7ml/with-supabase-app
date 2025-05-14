import { create } from 'zustand'

export interface Game {
  id: string
  name: string
  category: string
  status: "active" | "maintenance" | "development"
  revenue: string
  users: string
}

interface GameStats {
  totalGames: string
  activeGames: string
  newGames: string
  testingGames: string
}

interface GamesState {
  games: Game[]
  stats: GameStats
  loading: boolean
  error: string | null
  setGames: (games: Game[]) => void
  setStats: (stats: GameStats) => void
  addGame: (game: Game) => void
  updateGame: (id: string, game: Partial<Game>) => void
  getGame: (id: string) => Game | undefined
  fetchGames: () => Promise<void>
  fetchStats: () => Promise<void>
}

export const useGamesStore = create<GamesState>((set, get) => ({
  games: [],
  stats: {
    totalGames: '0',
    activeGames: '0',
    newGames: '0',
    testingGames: '0',
  },
  loading: false,
  error: null,
  setGames: (games) => set({ games }),
  setStats: (stats) => set({ stats }),
  addGame: (game) =>
    set((state) => ({
      games: [...state.games, game],
    })),
  updateGame: (id, updatedGame) =>
    set((state) => ({
      games: state.games.map((game) =>
        game.id === id
          ? { ...game, ...updatedGame }
          : game
      ),
    })),
  getGame: (id) => {
    const state = get()
    return state.games.find(game => game.id === id)
  },
  fetchGames: async () => {
    set({ loading: true, error: null })
    try {
      // TODO: Replace with actual API call
      // 模拟API调用，实际项目中应调用真实API
      const mockGames: Game[] = [
        {
          id: "1",
          name: "王者荣耀",
          category: "MOBA",
          status: "active",
          revenue: "¥1,234,567",
          users: "1,234,567",
        },
        {
          id: "2",
          name: "和平精英",
          category: "射击",
          status: "active",
          revenue: "¥987,654",
          users: "987,654",
        },
        {
          id: "3",
          name: "原神",
          category: "RPG",
          status: "active",
          revenue: "¥2,345,678",
          users: "2,345,678",
        },
        {
          id: "4",
          name: "阴阳师",
          category: "RPG",
          status: "maintenance",
          revenue: "¥345,678",
          users: "345,678",
        },
        {
          id: "5",
          name: "第五人格",
          category: "竞技",
          status: "active",
          revenue: "¥456,789",
          users: "456,789",
        },
      ]
      setTimeout(() => {
        set({ games: mockGames, loading: false })
      }, 500)
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
  fetchStats: async () => {
    set({ loading: true, error: null })
    try {
      // TODO: Replace with actual API call
      // 模拟API调用，实际项目中应调用真实API
      const mockStats: GameStats = {
        totalGames: '156',
        activeGames: '89',
        newGames: '23',
        testingGames: '12',
      }
      setTimeout(() => {
        set({ stats: mockStats, loading: false })
      }, 500)
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
})) 
