import React from 'react';
import CourseNav from './CourseNav';
import Greeting from './Greeting';
const LandingPage = () => {
  return (
    <div className="courseContainer">
      <CourseNav />
      <Greeting />
    </div>
  );
};

export default LandingPage;
