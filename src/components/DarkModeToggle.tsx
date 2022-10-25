import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const DarkModeToggle = ({ ...props }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-gray-200 hover:text-zinc-900 focus-visible:outline-dotted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:hover:bg-gray-700 dark:hover:text-amber-500"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      {...props}
    >
      {mounted && (
        <>
          {resolvedTheme === 'dark' ? (
            <FiSun className="h-5 w-5" />
          ) : (
            <FiMoon className="h-5 w-5 " />
          )}
        </>
      )}
    </button>
  );
};
