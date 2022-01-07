const API_KEY = process.env.API_KEY

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchAction: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchAdventure: {
    title: 'Adventure',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=12`
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
  },
  fetchComedy: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
  },
  fetchCrime: {
    title: 'Crime',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80`
  },
  fetchDocumentary: {
    title: 'Documentary',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`
  },
  fetchDrama: {
    title: 'Drama',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`
  },
  fetchFamily: {
    title: 'Family',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`
  },
  fetchFantasy: {
    title: 'Fantasy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=14`
  },
  fetchHistory: {
    title: 'History',
    url: `/trending/movie/week?api_key=${API_KEY}&with_genres=36`
  },
  fetcHorror: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
  },
  fetchMusic: {
    title: 'Music',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10402`
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
  },
  fetchRomance: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
  },
  fetchScienceFiction: {
    title: 'Science Fiction',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
  },
  fetchThriller: {
    title: 'Thriller',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=53`
  },
  fetchWar: {
    title: 'War',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`
  },
  fetcWestern: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
  }
}
