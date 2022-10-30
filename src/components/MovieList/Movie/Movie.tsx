import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IMovie } from "../../../models/interfaces";

interface TProps {
  movie: IMovie;
}

const Movie: FC<TProps> = ({ movie }) => {
  return (
    <li>
      <Link href={`/movies/${movie.id}`}>
        <Image
          className="rounded-2xl"
          src={process.env.NEXT_PUBLIC_URL_IMAGES_POSTERS_W154+movie.poster_path}
          alt="Picture of the author"
          width={300}
          height={500}
        />
      </Link>
      <strong className="text-lg">{movie.title}</strong>
    </li>
  );
};

export default Movie;
