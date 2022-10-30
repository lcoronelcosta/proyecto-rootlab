import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Nav } from "../common/Nav";

interface TProps {
  title: string;
  description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Head>
        <title>{title} | Rootlab Movies</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white h-20">
        <Nav />
      </header>
      <main className="grow flex flex-col text-white">{children}</main>
      <footer className="flex flex-col p-12 h-20 text-black bg-white items-center justify-center">
        <a
          href="https://rootstack.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className="text-slate-500 hover:text-blue-600">Rootstack</span>
        </a>
        <p className="text-slate-500 hover:text-blue-600">Modified by Luis Coronel - lufecoro@outlook.com</p>
      </footer>
    </div>
  );
};
