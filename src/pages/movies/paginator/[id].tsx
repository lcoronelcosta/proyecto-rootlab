import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { Pagination } from "../../../components/common/Pagination";
import { ApplicationWrapper } from "../../../components/layout/ApplicationWrapper";
import { MovieList } from "../../../components/MovieList/MovieList";

interface TProps {
  id: number;
}

const PaginatorIndex: NextPage<TProps> = ({ id }) => {
  return (
    <ApplicationWrapper title={`Prueba`}>
      <MovieList numPage={id}/>
      <Pagination num_pages={10} />
    </ApplicationWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.query.id;
    return {
      props: {
        id,
      },
    };
  };

export default PaginatorIndex;
