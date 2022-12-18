'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

function ThemeContextProvider({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}

export default ThemeContextProvider;
