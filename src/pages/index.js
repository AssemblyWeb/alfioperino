import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Alfio Perino - Web Developer" />
      <Page >
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
        <AboutSection sectionId="about" heading="Nice to have you here!" />
        <InterestsSection sectionId="details" heading="Stack" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Up for a chat?" />
      </Page>
    </>
  );
}
