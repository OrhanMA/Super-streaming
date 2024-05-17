export interface MovieDetails {
  id: number;
  title: string;
  genres: { id: number; name: string }[];
  release_date: string;
  runtime: string;
  vote_average: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  production_companies: {
    name: string;
    origin_country: string;
    id: number;
    logo_path: string;
  }[];
  production_countries: {
    name: string;
  }[];
  revenue: number;
  homepage: string;
  status: string;
}

export interface MoviePreview {
  title: string;
  release_date: string;
  runtime: string;
  vote_average: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
