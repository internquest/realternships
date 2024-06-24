"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterComponent = () => {
  const TypewriterMemoized = React.memo(Typewriter);
  return (
    <div>
      <TypewriterMemoized
        words={["Dream It", "Experience It", "Land It"]}
        loop={0}
        cursor
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypewriterComponent;
