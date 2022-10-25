import Head from 'next/head';
import Image from 'next/image';

import { SocialLinks } from '@/components/SocialLinks';
import { MainLayout } from '@/layouts/MainLayout/MainLayout';

const Home = () => {
  return (
    <>
      <Head>
        <title>Marco Hinen - Personal Website</title>
      </Head>
      <MainLayout>
        <div className="mx-auto my-auto flex max-w-2xl flex-col items-center justify-center border-gray-200 pb-16 dark:border-gray-700">
          <div className="flex flex-col-reverse items-start sm:flex-row">
            <div className="flex flex-col pr-8">
              <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl ">
                <span className="bg-gradient-to-bl from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  {`Hi, I'm Marco `}
                </span>
                👋
              </h1>
              <h2 className="mb-4 text-gray-700 dark:text-gray-200">
                Frontend Engineer at AusPost
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Currently, building accessible and performant web apps using{' '}
                <span className="font-semibold text-cyan-800 dark:text-cyan-500">
                  React
                </span>{' '}
                /{' '}
                <span className="font-semibold text-violet-700 dark:text-violet-400">
                  Next.js
                </span>{' '}
                and{' '}
                <span className="font-semibold text-sky-800 dark:text-sky-500">
                  Typescript
                </span>{' '}
              </p>
              <p className="text-gray-600 dark:text-gray-300 ">
                This{`'`}s my personal website where I try new things and hope
                to start a blog soon.
              </p>
              <SocialLinks />
            </div>
            <div className="relative mb-8 mr-auto w-[80px] rounded-full bg-gradient-to-r  from-purple-800 via-violet-900 to-purple-800 p-1 shadow-lg shadow-purple-500/30 sm:mb-0 sm:w-[176px]">
              <Image
                alt="An avatar of Marco"
                height={120}
                width={120}
                src="/me.png"
                sizes="30vw"
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
