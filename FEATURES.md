# New Features Added

## 1. Search History & Favorites

The application now automatically tracks all your searches and answers. Your search history is preserved even after closing and reopening the browser.

### Features:
- **Automatic Saving**: Every search and its answer is saved automatically
- **Search History Dashboard**: Access `/dashboard` to view all past searches
- **Favorites**: Star your favorite searches for quick access
- **Delete**: Remove specific searches from history
- **Recent Searches**: Quick shortcuts to your 3 most recent searches in the search dialog

## 2. Dark Mode / Theme Toggle

Full dark mode support with persistent theme preference.

### How to use:
- Click the moon/sun icon in the top right corner to toggle between light and dark modes
- Your theme preference is saved and persists across sessions

## 3. Dashboard Page

A dedicated page to manage your search history and favorites.

### Features:
- **Recent Searches Tab**: View all your searches in chronological order
- **Favorite Searches Tab**: Filter to show only your starred searches
- **Responsive Design**: Works great on desktop and mobile
- **Back Button**: Quick navigation back to the main search page

## Technical Stack

- **State Management**: Zustand with localStorage persistence
- **Theme System**: next-themes for dark mode support
- **UI Components**: Radix UI components styled with Tailwind CSS

## Files Added/Modified

### New Files:
- `/lib/store.ts` - Zustand store for search history
- `/components/SearchHistory.tsx` - Component to display search history
- `/components/ThemeProvider.tsx` - Theme provider wrapper
- `/components/ThemeToggle.tsx` - Theme toggle button
- `/pages/dashboard.tsx` - Dashboard page

### Modified Files:
- `/components/SearchDialog.tsx` - Added history saving and quick suggestions
- `/pages/index.tsx` - Added theme toggle and dashboard link
- `/pages/_app.tsx` - Added ThemeProvider wrapper

## Data Persistence

Search history is stored in browser localStorage under the key `search-store`. This means:
- Your searches persist across browser sessions
- Data is stored locally on your device
- Clearing browser cache will clear search history
