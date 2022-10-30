import React, { NextPage } from "next";
import { ApplicationWrapper } from "../components/layout/ApplicationWrapper";

type HomeProps = {
  response: string;
};

const Home: NextPage<HomeProps> = () => {
  return (
    <ApplicationWrapper
      title="Home"
      description="Home of the rootlab movies website"
    >
      <div className="grow flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
          <h1 className="text-7xl font-bold underline text-white">
            Bienvenidos
          </h1>
          <br />
          <h3 className="text-5xl font-bold underline text-white">Al proyecto del curso RootLab</h3>
          <h4 className="text-4xl font-bold underline text-white">Luis Coronel - lufecoro@outlook.com</h4>
      </div>
    </ApplicationWrapper>
  );
};

export default Home;