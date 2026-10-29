import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface SearchItem {
  id: string
  query: string
  answer: string
  timestamp: number
  isFavorite: boolean
}

interface SearchStore {
  history: SearchItem[]
  addSearch: (item: Omit<SearchItem, 'id' | 'timestamp'>) => void
  removeSearch: (id: string) => void
  clearHistory: () => void
  toggleFavorite: (id: string) => void
  getFavorites: () => SearchItem[]
  getRecentSearches: (limit?: number) => SearchItem[]
}

export const useSearchStore = create<SearchStore>()(
  persist(
    (set, get) => ({
      history: [],

  addSearch: (item) =>
    set((state) => ({
      history: [
        {
          id: Date.now().toString(),
          timestamp: Date.now(),
          ...item,
        },
        ...state.history,
      ],
    })),

  removeSearch: (id) =>
    set((state) => ({
      history: state.history.filter((item) => item.id !== id),
    })),

  clearHistory: () => set({ history: [] }),

  toggleFavorite: (id) =>
    set((state) => ({
      history: state.history.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      ),
    })),

  getFavorites: () => get().history.filter((item) => item.isFavorite),

  getRecentSearches: (limit = 5) => get().history.slice(0, limit),
    }),
    {
      name: 'search-store',
    }
  )
)
