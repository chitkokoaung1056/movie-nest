export type MovieType = {
  id: number;

  title: string;

  overview: string;

  poster_path: string | null;

  backdrop_path: string | null;

  release_date: string;

  vote_average: number;

  video: boolean;

  genre_ids?: number[];

  runtime?: number;

  status?: string;

  tagline?: string;

  genres: unknown[];

  budget: number;

  revenue: number;
};
