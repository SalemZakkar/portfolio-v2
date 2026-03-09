import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="mt-10 w-full">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Salem Zakkar
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base leading-relaxed font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Motivated and detail-oriented Software Developer with hands-on
              experience in developing cross-platform mobile applications and
              backend systems. Proven ability to build efficient, responsive,
              and user-friendly mobile solutions, including successful
              e-commerce applications with 100K+ and 50K+ downloads. Skilled in
              designing and implementing scalable, high-performance backend
              services and APIs, delivering robust solutions that meet both user
              and business needs. Strong full-stack development capabilities,
              combining frontend and backend expertise to create end-to-end
              application solutions.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Syrian flag"
                src="https://flagcdn.com/sy.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Hama, Syria
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
