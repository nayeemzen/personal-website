import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './services.css';

const Services = () => (
  <div className="services">
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}
      transitionName="SlideIn"
    >
      <h1>SERVICES</h1>
      <section className="skills">
        <ul>
          <li>Mobile Development (Android/iOS)</li>
          <li>Web Development (HTML, CSS, Javascript, React,)</li>
          <li>Backend Development</li>
          <li>Data Modeling/Schema Design</li>
          <li>Scalability Engineering/Distributed Systems</li>
          <li>Unit/Integration Testing Infrastructure</li>
        </ul>
      </section>
      <section className="consulting">
        <h2>Consulting</h2>
        <section>
          <p>
              I offer end-to-end software consulting services.
              If you have an idea you want to turn into reality,
              or have an existing piece of software that needs
              development, refactoring or debugging I can help you.
          </p>
        </section>
        <section>
          <p>
            I have worked in some of the top software engineering teams
            in the world and have extensive knowledge about industry
            best practices. I am passionate about my work and strive
            to deliver world class results.
          </p>
        </section>
      </section>
      <section className="collaboration">
        <h2>Collaboration</h2>
        <p>
          I love to discuss and collaborate on unique ideas. If you're
          interested in collaborating, shoot me an email.
        </p>
      </section>
      <section className="full-time">
        <h2>Full Time</h2>
        <p>
          I am always open to unique and challenging new opportunities. Reach out
          on LinkedIn if you want to hire me on your team full time. Currently only
          open to remote or Toronto-based positions.
        </p>
      </section>
    </ReactCSSTransitionGroup>
  </div>
);

export default Services;
