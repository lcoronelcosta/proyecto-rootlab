import React, { NextPage } from "next";
import { Pagination } from "../../components/common/Pagination";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { MovieList } from "../../components/MovieList/MovieList";

interface TProps {
  response: string;
}

const Movies: NextPage<TProps> = () => {
  return (
    <ApplicationWrapper
      title="Movies"
      description="Movies of the rootlab movies website"
    >
      <MovieList numPage={1}/>
      <Pagination num_pages={10} />
    </ApplicationWrapper>
  );
};

export default Movies;
