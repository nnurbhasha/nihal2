import React from "react";

import Hero from "../components/Hero";

// function component; does not have to manage state
function HomePage(props) {
  return (
    <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
  );
}

export default HomePage;
