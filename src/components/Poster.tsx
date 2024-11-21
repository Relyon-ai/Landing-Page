"use client"

import type { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface PosterProps {
  isDark: boolean;
  backgroundImage: string;
  backgroundImage2?: string;
  headline?: string;
  title: string;
  description: string;
  button1Text?: string;
  button1Link?: string | Url;
  button2Text?: string;
  button2Link?: string | Url;
  isPushed?: boolean;
}


export default function Poster({
  isDark,
  backgroundImage,
  backgroundImage2 = "",
  headline,
  title,
  description,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
  isPushed = false,
}: PosterProps) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="relative h-screen w-screen ">
      {isPushed ? <div className="flex">
          <Image
            src={isMobile && backgroundImage2 != "" ? backgroundImage2 : backgroundImage}
            alt="Background"
            layout="fill"
            className=" object-contain h-full object-right" 
          />
        </div> : (
        
          <Image
            src={isMobile && backgroundImage2 != "" ? backgroundImage2 : backgroundImage}
            alt="Background"
            layout="fill"
            className="  h-full" 
          />
        
      )}

      <div
        className={`absolute inset-0 bg-gradient-to-r ${isDark ? "from-black" : "from-white"} z-10 to-transparent`}
      />
      <div
        className={`relative z-10 mt-[20vh] lg:mt-24 flex h-full flex-col justify-center px-[6%] ${isDark ? "text-white" : "text-black"}`}
      >
        <p className="mb-8 max-w-2xl text-xl z-20">{headline}</p>
        <h2 className="mb-6 lg:mb-10 text-4xl lg:text-7xl font-bold z-20 whitespace-pre-line">{title}</h2>
        <p className="mb-6 lg:mb-8 max-w-2xl text-lg lg:text-xl z-20">{description}</p>
        <div className="mb-4 lg:mb-16 flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
          {button1Link && button1Text && (
            <Button
              variant={`${isDark ? "ctaWhite" : "cta"}`}
              className="p-8 w-full lg:w-auto"
              asChild
            >
              <Link href={button1Link} className="text-xl">
                {button1Text}
              </Link>
            </Button>
          )}

          {button2Link && button2Text && (
            <Button
              variant={`${isDark ? "ctaWhite" : "cta"}`}
              className="p-8 w-full lg:w-auto"
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
