import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IMovie } from "../../../models/interfaces";
import Movie from "./Movie";

interface TProps {
  movie: IMovie;
}

const DetailMovie: FC<TProps> = ({ movie }) => {
  return (
    <>
    <figure className="md:flex p-20 md:p-10 dark:bg-slate-800">
        <Image
        className="rounded-2xl"
        src={process.env.NEXT_PUBLIC_URL_IMAGES_POSTERS_W500+movie.poster_path}
        alt="Picture of the author"
        width={500}
        height={800}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <h1 className="text-6xl pt-12">{movie.title}</h1>  
            <p className="text-lg font-medium">{`Date: `+movie.release_date}</p>  
            <p className="text-lg font-medium">{`Duration: `+movie.runtime} minutes</p>  
            <h2 className="text-3xl pt-8 ">Overview</h2>
            <p className="text-lg font-medium">
                {movie.overview}
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                Creadores
            </div>
            {movie.production_companies.map((productor) => (
                <div 
                    className="text-slate-700 dark:text-slate-500"
                    key={productor.id}
                >
                    {productor.name}
                </div>
            ))}
            
            </figcaption>
        </div>
    </figure>
    </>
    
  );
};

export default DetailMovie;
