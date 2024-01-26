import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <>
    
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={1}
        innerStyle={{
          backgroundColor: "#DF9A37",
        }}
        outerStyle={{
          border: "3px solid #DF9A37",
          background: "transparent",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              outerAlpha: 0,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
    </>
  );
};

export default Cursor;
