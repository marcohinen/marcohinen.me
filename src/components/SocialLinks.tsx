import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMessage } from 'react-icons/ai';

import { IconLink } from './IconLink';

export const SocialLinks: React.FC = ({ ...props }) => {
  return (
    <div className="mt-6 flex space-x-4" {...props}>
      <IconLink
        href="https://www.github.com/marcohinen"
        aria-label="github profile"
      >
        <AiFillGithub className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
      </IconLink>
      <IconLink
        href="https://au.linkedin.com/in/marcohinen"
        aria-label="linkedin profile"
      >
        <AiFillLinkedin className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
      </IconLink>
      <IconLink
        href="mailto:hi@marcohinen.me"
        aria-label="send an email to Marco"
      >
        <AiFillMessage className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
      </IconLink>
    </div>
  );
};
