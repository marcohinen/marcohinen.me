import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(props: any) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#b428d0"
        />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta property="og:title" content="Marco Hinen - Personal website" />
        <meta content="Personal website" name="description" />
      </Head>
      <body className="bg-gray-50 text-gray-600 selection:bg-indigo-600 selection:text-yellow-400 dark:bg-zinc-900 dark:text-gray-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
