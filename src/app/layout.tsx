import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';

import { MainLayout } from '@/layouts/MainLayout/MainLayout';

import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-600 selection:bg-indigo-600 selection:text-yellow-400 dark:bg-zinc-900 dark:text-gray-400">
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
