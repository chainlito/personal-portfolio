import Link from 'next/link';
import Head from 'next/head';
import React, { useContext } from 'react';
import { Background } from './Background';
import { Header } from './Header';

export function Layout({ children }: any) {
  return (
    <React.Fragment>
      <div className="relative h-screen overflow-y-auto overflow-x-hidden bg-sky-50 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-400">
        <div className="fixed">
          <Background />
        </div>
        <div className="absolute top-0 z-20 flex w-full flex-col text-neutral-200 transition-all">
          <Header />
          <div className="sm:ml-16">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}