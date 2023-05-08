'use client';
import React from 'react';

import { DarkModeToggle } from './DarkModeToggle';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="mx-4 my-6 flex max-w-2xl flex-row-reverse items-end justify-between py-2 text-right md:mx-auto">
        <DarkModeToggle data-testid="dark-mode-toggle" />
      </div>
    </header>
  );
};
