import Link from 'next/link';
import Head from 'next/head';
import React, { useContext } from 'react';
import { Background } from './Background';

export function Layout({ children }: any) {
  return (
    <React.Fragment>
      <div>
        <div>
          <Background />
        </div>
        <div>
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}