import React from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router";
import { GitAPI } from "./GitAPI";

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

const Box = styled.div``;

const GithubPage: React.FC = (): JSX.Element => {
  const [msg, getMsg] = React.useState<string[]>([]);
  const { repo } = useParams();

  const handleRepo = async () => {
    const messages: string[] = [];
    try {
      const res = await GitAPI.getRepoData(repo);
      res.data.map((msg: CommitMessgae) => {
        messages.push(msg.commit.message);
      });
      getMsg(messages);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    handleRepo();
  }, [repo]);

  return (
    <>
      <Container>
        {msg.map((commit, index) => (
          <Box key={index} style={{ color: "white" }}>
            {commit}
          </Box>
        ))}
      </Container>
    </>
  );
};

export default GithubPage;
