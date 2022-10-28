import Image from 'next/image';

import { SocialLinks } from '@/components/SocialLinks';

const Page = () => {
  return (
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
            This{`'`}s my personal website where I try new things and hope to
            start a blog soon.
          </p>
          <SocialLinks />
        </div>
        <div className="group relative mb-4 w-[80px] sm:mb-0 sm:w-[156px]">
          <div className="opacity-85 absolute -inset-0.5 animate-tilt rounded-full bg-gradient-to-tr from-fuchsia-800 to-purple-700 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
          <div className="absolute -inset-0.5 rounded-full bg-fuchsia-600  opacity-50" />
          <Image
            alt="An avatar of Marco"
            height={156}
            width={156}
            src="/me.png"
            sizes="30vw"
            className="relative rounded-full p-px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
