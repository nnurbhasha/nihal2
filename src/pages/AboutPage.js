import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

// function component; does not have to manage state
function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hello, my name is Nihal. I am a software enginner with experience in
          React, Node.js, Express, Python, SQL Server, PostgreSQL and MongoDB.
        </p>
        <p>
          My dream is to push human advancement by utilizing data in it's many
          forms.
        </p>
        <p>
          I am constantly learning new things. Currently those thinkgs include
          gaining more experience with React, Node.js, Express, PostgreSQL and
          MongoDB.
        </p>
        <p>
          My latest project, Money Manager, is a financual tool for all people.
          You can check it out here, or on the homepage. It is build with React.
        </p>
        <p>
          When I am not programming, chances are I'm wrting a blog post. You can
          find those here.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
