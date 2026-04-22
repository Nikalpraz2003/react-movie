 Movie Discovery Platform

 📽️ Description
A modern web application for discovering trending movies and TV series with advanced search, genre filtering, and personalized favorites management. Built with React and integrated with The Movie Database (TMDB) API.

✨ Features
- 🎬 Browse trending, popular, and top-rated movies & TV series
- 🔍 Real-time search functionality
- 🏷️ Multi-genre filtering
- ❤️ Add/remove favorites with persistent storage using localStorage
- 🌙 Dark/Light theme switching
- 🚀 Fast performance with Vite

 🛠️ Tech Stack
- Frontend: React, Vite
- Routing: React Router 
- State Management:React Context API
- Styling: CSS3
- API: The Movie Database (TMDB)

 Open http://localhost:5173 in your browser

 🚀 Usage
- Browse Movies: Explore trending, popular, and top-rated content
- Search: Use the search bar to find specific movies or series
- Filter by Genre: Select genres to narrow down your search
- Manage Favorites: Click the heart icon to save movies to your favorites
- Switch Theme: Toggle between dark and light mode in the navbar
- View Favorites: Navigate to the Favorites page to see saved movies

🔑 Key Components

MovieCard
Displays individual movie/series details including poster, title, rating, and favorites button.

GenreFilter
Allows users to filter content by one or multiple genres from the TMDB database.

CategoryTabs
Provides tabs to switch between Trending, Popular Movies, and Popular Series.

MovieRating
Shows movie ratings and other relevant metadata.

Navbar
Main navigation component with search functionality and theme toggle.



🌐 API Reference
- Source: The Movie Database (TMDB)
- Documentation: https://www.themoviedb.org/settings/api
- Endpoints Used:
  - `/movie/popular` - Popular movies
  - `/movie/trending` - Trending movies
  - `/tv/popular` - Popular TV series
  - `/search/movie` - Search movies
  - `/search/tv` - Search TV series
  - `/discover/movie` - Discover by genre
  - `/genre/movie/list` - Genre list

🎨 Theme Customization
The app uses CSS variables for theme switching. Themes can be modified in the CSS files:
- Light mode: `data-theme="light"`
- Dark mode: `data-theme="dark"`

📱 Responsive Design
The application is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile devices


📈 Future Enhancements
- User authentication and accounts
- Movie ratings and reviews
- Watchlist feature
- Recommendations based on viewing history
- Backend API integration
- TypeScript migration
- Unit and integration tests

This project is open source and available for educational purposes.

Happy Watching! 🎬🍿
