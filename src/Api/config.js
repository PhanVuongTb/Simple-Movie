// https://api.themoviedb.org/3/movie/now_playing?api_key
// api_key = 95f2419536f533cdaa1dadf83c606027

export const fetcher = (...args) => fetch(...args).then(res => res.json())