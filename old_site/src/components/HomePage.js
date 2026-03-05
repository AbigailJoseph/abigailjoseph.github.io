import React from 'react';
import ProfileSection from './Sections/ProfileSection';
import AboutSection from './Sections/AboutSection';
import ProjectsSection from './Sections/ProjectsSection';
import ContactSection from './Sections/ContactSection';

function Home() {
  return (
    <>
      <ProfileSection />
      {/* <spacer type='vertical' height='20px'/> */}
      <AboutSection/>
      {/* <section/> */}
      <ProjectsSection/>
      <ContactSection/>
    </>
  );
}

export default Home;