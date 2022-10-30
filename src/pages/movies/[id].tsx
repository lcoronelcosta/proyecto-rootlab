import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import DetailMovie from "../../components/MovieList/Movie/DetailMovie";
import Movie from "../../components/MovieList/Movie/Movie";
import { IMovie } from "../../models/interfaces";

interface TProps {
  movie: IMovie;
}

const MovieDetailPage: NextPage<TProps> = ({ movie }) => {
  console.log(movie);
  return (
    <ApplicationWrapper title={movie.title}>
      <DetailMovie key={movie.id} movie={movie} />
    </ApplicationWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;
  console.log(id);
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL+"/movie/"+id+'?api_key='+process.env.NEXT_PUBLIC_API_KEY
  );
  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
};

export default MovieDetailPage;
