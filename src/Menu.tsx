import * as React from "react";
import styled from "styled-components";
import { GitAPI } from "./GitAPI";

const Container = styled.div`
  display: flex;
`;

const Bar = styled.div<{ click: boolean }>`
  display: absolute;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 50px;
  transition: all ease 0.5s;
  transform: ${(props) =>
    props.click == true ? "rotate(45deg)" : "rotate(0deg)"};
  margin-left: 20px;
`;

const Manual = styled.div<{ show: boolean }>`
  width: 500px;
  height: auto;
  margin-top: 10px;
  background-color: #28323c;
  opacity: 0.8;
  color: white;
  transition: all ease 0.5s;
  transform: scale(1);
  ${(props) =>
    props.show
      ? "display:relative; z-index: 1; left:100px; position: fixed; "
      : "display:none"};
  ul {
    margin: 0px 0px 20px 0px;
    display: flex;
    list-style: none;
    .topic {
      margin-left: 100px;
    }
  }
  border-radius: 25px;
`;

const Topic = styled.div`
  margin-left: -30px;
  width: 100px;
  color: white;
  font-weight: bolder;
  transition: all ease 0.5s;
  border-bottom: #5f5f5f 5px solid;
  &:hover {
    color: #00ffd5;
  }
`;

const Element = styled.li`
  margin-top: 10px;
  &:hover {
    color: #00ffd5;
  }
  border-bottom: 1px solid gray;
`;

interface APIData {
  name: string;
}

let GitRepoList: string[] = [];

const Menu = () => {
  const [click, getClick] = React.useState(false);
  const [menu, getClickMenu] = React.useState(false);
  const [data, getData] = React.useState<string[]>([]);

  const getRepo = async () => {
    try {
      const res = await GitAPI.getAllRepo();
      res.data.map((result: APIData) => {
        GitRepoList.push(result.name);
      });
      getData(GitRepoList);
    } catch (e) {
      console.log(e);
    }
  };

  const onClick = () => {
    getClick(!click);
    getClickMenu(!menu);
  };

  React.useEffect(() => {
    getRepo();
  }, []);

  return (
    <Container>
      <Bar click={click} onClick={onClick}>
        ☰
      </Bar>

      <Manual show={menu}>
        <ul>
          <li className="topic">
            <Topic>Github</Topic>
            {data.map((name: string, index: number) => (
              <Element key={index}>{name}</Element>
            ))}
          </li>
          <li className="topic">
            <Topic>Study</Topic>
            <Element key={1}>React</Element>
            <Element key={2}>JavaScript</Element>
            <Element key={3}>TypeScript</Element>
          </li>
        </ul>
      </Manual>
    </Container>
  );
};

export default Menu;