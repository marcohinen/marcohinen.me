import React from 'react';

import { DarkModeToggle } from './DarkModeToggle';

export const Header: React.FC = () => {
  return (
    <header>
      <div className=" my-6 mx-4 flex max-w-2xl flex-row-reverse items-end justify-between py-2 text-right md:mx-auto">
        <DarkModeToggle data-testid="dark-mode-toggle" />
      </div>
    </header>
  );
};
