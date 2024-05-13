export interface MovieDetails {
  title: string;
  genres: { id: number; name: string }[];
  release_date: string;
  runtime: string;
  vote_average: string;
  overview: string;
}

export interface MoviePreview {
  title: string;
  release_date: string;
  runtime: string;
  vote_average: string;
}
