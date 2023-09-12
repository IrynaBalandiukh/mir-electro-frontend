import React, { ReactNode } from 'react';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

type Props = {
  children: ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  );
};
