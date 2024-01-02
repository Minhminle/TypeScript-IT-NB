export interface User {
  name: string;
}

export interface MovieList {
  results: Movie[];
}

export interface Movie {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
}
