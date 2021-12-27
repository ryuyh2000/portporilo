import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";

const Constainer = styled.div`
  display: flex;
  color: white;
`;

const Box1 = styled.div`
  background-color: #171b1c;
  border-radius: 10px;
  margin-left: 20%;
  width: 60%;
  height: 80vh;
  display: absolute;
  z-index: 0;
`;

const Logo = styled.div<{ index: string }>`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => `url(${props.index}) no-repeat`};
  background-image: url(${(props) => props.index});
  background-size: 100% 100%;
  .left {
    position: absolute;
    top: 50%;
    left: -9%;
    transform: translate(-50%, -50%);
  }
  .right {
    position: absolute;
    top: 50%;
    left: 111%;
    transform: translate(-50%, -50%);
  }
`;

let IMGARRAY = [img1, img2, img3];

function Home() {
  const [center, getCenter] = React.useState(IMGARRAY[0]);
  const [count, getCount] = React.useState(0);

  const right = () => {
    getCount(count + 1);
    if (count <= IMGARRAY.length - 1) {
      getCenter(IMGARRAY[count]);
    } else {
      getCount(0);
    }
  };

  const left = () => {
    getCount(count - 1);
  };

  React.useEffect(() => {}, []);

  return (
    <>
      <Menu />
      <Constainer>
        <Box1>
          <Logo index={center}>
            <button className="left" onClick={left}>
              left
            </button>
            <button className="right" onClick={right}>
              right
            </button>
          </Logo>
        </Box1>
      </Constainer>
    </>
  );
}

export default Home;
