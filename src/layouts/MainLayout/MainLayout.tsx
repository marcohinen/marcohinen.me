import React from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-zinc-900">
      <Header />
      <main className="mx-6 flex flex-1 flex-col justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};
