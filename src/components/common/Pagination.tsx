import Link from "next/link";
import React, { FC } from "react";

interface TProps {
  num_pages: number;
}

export const Pagination: FC<TProps> = ({ num_pages }) => {
  let arrayPages = new Array(num_pages);
  for(var i=1; i<=num_pages; i++){
    arrayPages.push(i);
  }
  return (
    <div>
        <nav className="flex p-6 h-20 text-black bg-white items-center justify-center">
          {
            arrayPages.map((cont) => (
              <Link 
                key={cont}
                href={`/movies/paginator/`+cont}>
                <a
                  className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                  aria-current="page"
                >{cont}</a>
              </Link>
            ))
          }
        </nav>
    </div>
  );
};
