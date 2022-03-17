import React from "react";
import styled from "styled-components";
import CommitSlide from "./CommitSlide";

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

function Home() {
  React.useEffect(() => {}, []);

  return (
    <>
      <CommitSlide />
      <Constainer>
        <Box1></Box1>
      </Constainer>
    </>
  );
}

export default Home;
