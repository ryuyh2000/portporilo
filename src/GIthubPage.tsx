import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { GitAPI } from "./GitAPI";
import GitHub from "./img/GitHub.png";

interface CommitMessgae {
  commit: { message: string };
}

const Container = styled.div`
  background-color: #171b1c;
  border-radius: 10px;
  margin-left: 20%;
  width: 60%;
  height: 80vh;
  display: absolute;
  z-index: 0;
`;

const GitContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  top: 70%;
  left: 50%;
  text-align: center;
`;

const GitUrl = styled.a`
  color: white;
  transition: all ease 0.5s;
  &:hover {
    color: #00ffd5;
  }
`;

const GithubPage: React.FC = (): JSX.Element => {
  const [msg, getMsg] = React.useState<string[]>([]);
  const { repo } = useParams();

  const handleRepo = async () => {
    const messages: string[] = [];
    try {
      const res = await GitAPI.getRepoData(repo);
      res.data.map((msg: CommitMessgae) => messages.push(msg.commit.message));
      getMsg(messages);
    } catch (e) {
      console.log(e);
    }
  };

  // eslint-disable-next-line
  React.useEffect(() => {
    handleRepo();
  }, [repo]);

  return (
    <>
      <Container>
        {msg.map((commit, index) => (
          <div key={index} style={{ color: "white" }}>
            {index + 1}: {commit}
          </div>
        ))}
        <GitContainer>
          <img src={GitHub} />
          <GitUrl href={`https://github.com/ryuyh2000/${repo}`}>
            <p>{`https://github.com/ryuyh2000/${repo}`}</p>
          </GitUrl>
        </GitContainer>
      </Container>
    </>
  );
};

export default GithubPage;
