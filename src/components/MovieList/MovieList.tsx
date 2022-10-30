import React, { useEffect, useState, FC } from "react";
import { IMovie } from "../../models/interfaces";
import Movie from "./Movie/Movie";

export interface DataResponse{
  page: number | null;
  results: IMovie[];
}

export interface TProps{
  numPage: number;
}

const useMovies = (numPage: number) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL+'/movie/popular?api_key='+process.env.NEXT_PUBLIC_API_KEY+'&page='+numPage)
      .then((res) => res.json())
      .then((data: DataResponse) => setMovies(data.results.slice(0, 20)))
      .catch((error) => console.error(error));
  }, []);

  return movies;
};

export const MovieList: FC<TProps> = ({ numPage }) => {
  const movies = useMovies(numPage);
  return (
    <div className="flex flex-col justify-center text-white items-center p-6">
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-7">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};
