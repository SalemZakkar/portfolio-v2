import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.js";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Salem Zakkar | Software Engineer"
        description="Learn more about Salem Zakkar, a dedicated Software Engineer with 3 years of experience."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Salem Zakkar - Software Engineer",
          description:
            "Dive into the story of Salem Zakkar, a Software Engineer. Uncover the experiences, skills, and passion.",
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Engineer portfolio, Software Engineer, Flutter , Dart , NestJS , database , PSQL , postgresQL , mongoDB",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
