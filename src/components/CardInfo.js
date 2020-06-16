import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  // var. will hold react-spring style used
  // useSpring = React hook from react-spring
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  // target set to _blank --> they go to a dif. page; not taken off website
  return (
    <animated.div className="g-card-info" style={style}>
      <p className="n-card-title">{props.title}</p>
      <p className="n-card-sub-title">{props.subTitle}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        View
      </a>
    </animated.div>
  );
}

export default CardInfo;
