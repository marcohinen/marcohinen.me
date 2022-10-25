import React from 'react';

type IconLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const IconLink: React.FC<IconLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <a
      className="flex h-11 w-11 rounded-lg focus-visible:outline-dotted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      <span className=" flex h-11 w-11 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 hover:text-sky-700 dark:hover:bg-gray-700 dark:hover:text-sky-500">
        {children}
      </span>
    </a>
  );
};
