'use client';
import React from 'react';

import ThemeContextProvider from '@/contexts/ThemeContextProvider';

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
