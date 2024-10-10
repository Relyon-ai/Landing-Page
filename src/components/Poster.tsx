import type { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface PosterProps {
  isDark: boolean;
  backgroundImage: string;
  headline?: string;
  title: string;
  description: string;
  button1Text?: string;
  button1Link?: string | Url;
  button2Text?: string;
  button2Link?: string | Url;
}

export default function Poster({
  isDark,
  backgroundImage,
  headline,
  title,
  description,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
}: PosterProps) {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        className="z-0 h-[100%]"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-black' : 'from-white'} z-10 to-transparent`}
      />
      <div
        className={`relative z-20 mt-24 flex h-full flex-col justify-center px-[6%] ${isDark ? 'text-white' : 'text-black'}`}
      >
        <p className="mb-8 max-w-2xl text-xl">{headline}</p>
        <h2 className="mb-4 pr-96 text-7xl font-bold">{title}</h2>
        <p className="mb-8 max-w-2xl text-xl">{description}</p>
        <div className="mb-16 flex space-x-4">
          {button1Link && button1Text && (
            <Button
              variant={`${isDark ? 'ctaWhite' : 'cta'}`}
              className="p-8"
              asChild
            >
              <Link href={button1Link} className="text-xl">
                {button1Text}
              </Link>
            </Button>
          )}

          {button2Link && button2Text && (
            <Button
              variant={`${isDark ? 'ctaWhite' : 'cta'}`}
              className="p-8"
              asChild
            >
              <Link href={button2Link} className="text-xl">
                {button2Text}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
