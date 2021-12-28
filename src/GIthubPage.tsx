import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";

const GithubPage = () => {
  const { repo } = useParams();
  const handleRepo = () => {
    console.log(repo);
  };

  return <button onClick={handleRepo}>asdf</button>;
};

export default GithubPage;
