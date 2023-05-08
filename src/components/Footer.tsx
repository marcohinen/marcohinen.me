import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="mx-4 my-2 flex max-w-2xl flex-col items-center justify-between border-t border-gray-500 py-4 text-center sm:flex-row md:mx-auto">
        <p className="text-center">Made with ❤️ in Melbourne 🇦🇺</p>
        <p className="text-center">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
};
