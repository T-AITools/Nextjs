import Head from 'next/head'
import Link from 'next/link'
import { SearchHistory } from '@/components/SearchHistory'
import { ThemeToggle } from '@/components/ThemeToggle'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'history' | 'favorites'>('history')

  return (
    <>
      <Head>
        <title>Search Dashboard - OpenAI Template</title>
        <meta name="description" content="View your search history and favorites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>

          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition mb-6"
            >
              <ArrowLeft width={18} />
              Back to search
            </Link>

            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Search Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              View and manage your search history and favorites
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-3 font-medium transition border-b-2 ${
                activeTab === 'history'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              Recent Searches
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-4 py-3 font-medium transition border-b-2 ${
                activeTab === 'favorites'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              Favorite Searches
            </button>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
            <SearchHistory showFavoritesOnly={activeTab === 'favorites'} />
          </div>
        </div>
      </main>
    </>
  )
}
