import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

export type AppPropsWithLayout = AppProps & {
  Component: any;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
