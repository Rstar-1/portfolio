import React from 'react'
import Banner from './components/Banner';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

const Service = () => {
  return (
    <div className="relative section_bg overflow-hidden">
      <Banner />
      <div className="py40 md-py30 sm-py20">
        <Section2 />
      </div>
      <Section3 />
    </div>
  );
}

export default Service
