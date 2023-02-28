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
import './main.scss'


export default function IndexPage() {
  return (
    <>
      <Seo title="Alfio Perino - Web Developer" />
      <Page >
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
        <AboutSection sectionId="about" heading="Nice to have you here!" />
        <InterestsSection sectionId="details" heading="Stack" />
        <ProjectsSection sectionId="features" heading="Find out what I can do for you" />
        <ContactSection sectionId="github" heading="Up for a chat?" />
      </Page>
    </>
  );
}
