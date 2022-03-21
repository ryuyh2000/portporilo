import * as React from "react";
import styled from "styled-components";
import javaS from "./img/1.png";
import react from "./img/2.png";
import typeS from "./img/3.png";

const imgArr = [javaS, react, typeS];
const velogArr = ["javascript", "react", "typescript"];

let imgIndex = 0;

const LangImg = styled.img`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 50%;
  width: 200px;
  height: 200px;
`;

const HoverDiv = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 40%;
`;

const CommitSlide = () => {
  const [imageSrc, setImageSrc] = React.useState(javaS);
  const [velogHref, setVelogHref] = React.useState("javascript");
  const [mouseHover, setMouseHover] = React.useState(false);

  const changeImgae = () => {
    if (imgIndex === imgArr.length) {
      imgIndex = 0;
    }
    setVelogHref(velogArr[imgIndex]);
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
      <div
        onMouseOver={() => {
          setMouseHover(true);
        }}
        onMouseOut={() => {
          setMouseHover(false);
        }}
      >
        <a href={`https://velog.io/@ryuyh2000?tag=${velogHref}`}>
          <LangImg src={imageSrc} />
        </a>
      </div>

      {mouseHover && <HoverDiv>{velogHref}</HoverDiv>}
    </>
  );
};

export default CommitSlide;
