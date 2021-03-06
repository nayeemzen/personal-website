import React from 'react';
import './about.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const About = () => (
  <section className="about selected">
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}
      transitionName="SlideIn"
    >
      <h1>ABOUT ME</h1>
      <div className="headline">
        <ul>
          <li><span className="solve">solve</span> business problems.</li>
          <li><span className="design">design </span> beautiful experiences.</li>
          <li><span className="make">make</span> ideas happen.</li>
        </ul>
      </div>
      <div className="main">
        <section>
          <p>
            I am a full-stack software engineer based in Toronto, ON.
            Driven to solve challenging business problems in creative
            ways using technology.
          </p>
        </section>

        <section>
          <p>
            I am currently working as a senior software engineer at EBlock
            developing a real-time live auctioning platform. Previously I
            have worked on the Cash app at Square, intelligent dispatch at Uber
            and compilers at IBM.
          </p>
        </section>

        <section>
          <p>
            I don't just write code. I carefully craft experiences that captivate users.
            I treat my code like art - constantly striving for simplicity and elegance.
          </p>
        </section>

        <section>
          <p>
            I love discussing and collaborating on new ideas, from the user experience
            design to the nitty gritty technical details.
            If you have an idea or a business problem, I would love to hear from you.
          </p>
        </section>

      </div>
    </ReactCSSTransitionGroup>
  </section>
);

export default About;