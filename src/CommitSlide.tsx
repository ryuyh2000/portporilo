import * as React from "react";
import styled from "styled-components";
import javaS from "./img/1.png";
import react from "./img/2.png";
import typeS from "./img/3.png";

const imgArr = [javaS, react, typeS];
let imgIndex = 0;

const CommitSlide = () => {
  const [imageSrc, setImageSrc] = React.useState(javaS);

  const changeImgae = () => {
    if (imgIndex === imgArr.length) {
      imgIndex = 0;
    }
    setImageSrc(imgArr[imgIndex]);
    imgIndex += 1;
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      changeImgae();
    }, 3000);
    return () => clearInterval(timer);
  });

  return (
    <>
      <img src={imageSrc} />
      <div>asdf</div>
    </>
  );
};

export default CommitSlide;
