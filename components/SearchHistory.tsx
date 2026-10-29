'use client'

import React from 'react'
import { useSearchStore, SearchItem } from '@/lib/store'
import { Trash2, Star, Clock } from 'lucide-react'

interface SearchHistoryProps {
  showFavoritesOnly?: boolean
}

export function SearchHistory({ showFavoritesOnly = false }: SearchHistoryProps) {
  const { history, removeSearch, toggleFavorite, getFavorites } = useSearchStore()

  const items = showFavoritesOnly ? getFavorites() : history

  if (items.length === 0) {
    return (
      <div className="py-8 text-center text-slate-400">
        <p className="text-sm">
          {showFavoritesOnly ? 'No favorite searches yet.' : 'No search history yet.'}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition hover:shadow-sm"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                {item.query}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                {item.answer}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 flex items-center gap-1">
                <Clock width={12} />
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => toggleFavorite(item.id)}
                className={`p-1.5 rounded transition ${
                  item.isFavorite
                    ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300'
                    : 'hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400'
                }`}
                title={item.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Star width={16} fill={item.isFavorite ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={() => removeSearch(item.id)}
                className="p-1.5 rounded hover:bg-red-100 dark:hover:bg-red-900 text-red-400 dark:text-red-300 transition"
                title="Delete"
              >
                <Trash2 width={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
