import React from 'react';

const Greeting = () => {
  return (
    <main className="course">
      <h2 className="subTitle">Hi, Welcome to Illustrated JS</h2>
      <div className="contentLanding">
        <span>
          This is the very early stages of a personal project I am working on to
          help developers overcome the struggle of "Mastering the Coding
          Interview"
        </span>
        <h3>Core principles guiding the development of this project </h3>
        <p>
          {' '}
          Computer Science should be accessible and approchable for those
          without a math and engineering degree. Not knowing fancy lingo should
          not inhibit your ability to learn a concept
        </p>

        <p>
          {' '}
          Learning should come in multiple forms. On Illustrated JS you will
          have access to detailed notes, code snippets, video demonstrations,
          and illustrative examples. Each of these are designed with the
          explicit goal of viewing the problem through a different lens while
          supporting a wide range of learning styles
        </p>
        <p>
          {' '}
          Time spent coding is time spent learning. The curriculum is designed
          to help you develop a framework for thinking about complex problems.
          The real learning comes from you solving them. Illustrated JS provides
          problems for you to solve with each lesson.
        </p>
      </div>
    </main>
  );
};

export default Greeting;
