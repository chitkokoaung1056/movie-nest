import { cacheLife } from "next/cache";

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
};

export async function getMovies(page: number = 1) {
  const res = await fetch(
    `${BASE_URL}/discover/movie?include_adult=false&include_video=false&page=${page}&sort_by=popularity.desc`,
    {
      ...options,
    },
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}

export async function getMovieById(id: string) {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${BASE_URL}/movie/${id}`, {
    ...options,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return res.json();
}

export async function searchMovies(query: string, page = 1) {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${query}&page=${page}`,
    {
      ...options,
    },
  );

  if (!res.ok) throw new Error("Failed to search movies");

  return res.json();
}

export async function getMovieVideos(id: string) {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos?language=en-US`, {
    ...options,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch videos");
  }

  return res.json();
}
