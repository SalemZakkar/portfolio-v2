import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.js";

export default function Home() {
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
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
    </>
  );
}
