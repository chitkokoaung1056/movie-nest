"use server";

import { cacheLife } from "next/cache";
import { createClient } from "../supabase/server";
import { TrendingMovieDataType } from "@/types/movie";

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

export async function increaseMovieView(movie: TrendingMovieDataType) {
  const supabase = await createClient();

  // get current views
  const { data } = await supabase
    .from("movie_views")
    .select("views")
    .eq("movie_id", movie.movie_id)
    .maybeSingle();

  const views = (data?.views || 0) + 1;

  // insert or update
  const { error } = await supabase.from("movie_views").upsert({
    movie_id: movie.movie_id,
    title: movie.title,
    poster: movie.poster,
    views,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function getMovieViews(movieId: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("movie_views")
    .select("views")
    .eq("movie_id", movieId)
    .maybeSingle();

  if (error) {
    if (error) {
      throw new Error(error.message);
    }
  }

  return data?.views || 0;
}

export async function getTrendingMovies(
  limit: number = 5,
): Promise<TrendingMovieDataType[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("movie_views")
    .select("*")
    .order("views", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
