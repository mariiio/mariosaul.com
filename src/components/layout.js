import React from 'react';
import { Header } from './header.js';
import { Main } from './main.js';
import { Footer } from './footer.js';

export function Layout({ children }) {
  return (
    <div className={'outer'}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}