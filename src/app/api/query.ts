export const category = [
  {
    name: 'trending',
    title: 'Em alta',
    path: `/trending/all/week?api_key=${process.env.api_key}&language=${process.env.language}`,
  },
  {
    name: 'netflixOriginls',
    title: 'Originais Netflix',
    path: `/discover/tv?api_key=${process.env.api_key}&with_networks=213`,
  },
  {
    name: 'topRated',
    title: 'Poplares',
    path: `/movie/top_rated?api_key=${process.env.api_key}&language=${process.env.language}`,
  },
  {
    name: 'comedy',
    title: 'Comédios',
    path: `/discover/tv?api_key=${process.env.api_key}&with_genres=35`,
  },
  {
    name: 'romances',
    title: 'Romances',
    path: `/trending/all/week?api_key=${process.env.api_key}&language=${process.env.language}`,
  },
]
