import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
const TypeWriter = (props) => {
  return (
    <div>
      <TypeWriterEffect
        textStyle={{textAlign: "center"}}
        startDelay={900}
        cursorColor="blue"
        text={props.children}
        nextTextDelay={1000}
        typeSpeed={100}
      />
    </div>
  );
};

export default TypeWriter;
