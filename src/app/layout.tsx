import '@/styles/globals.css';

import ThemeContextProvider from '@/contexts/ThemeContextProvider';
import { MainLayout } from '@/layouts/MainLayout/MainLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-600 selection:bg-indigo-600 selection:text-yellow-400 dark:bg-zinc-900 dark:text-gray-400">
        <ThemeContextProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
