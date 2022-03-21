import * as React from "react";
import styled from "styled-components";
import { GitAPI } from "./GitAPI";
import { Link } from "react-router-dom";

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
    props.click === true ? "rotate(45deg)" : "rotate(0deg)"};
  margin-left: 20px;
`;

const Manual = styled.div<{ show: boolean }>`
  width: 500px;
  height: auto;
  margin-top: 10px;
  background-color: #28323c;
  opacity: 0.8;
  color: white;
  ${(props) =>
    props.show
      ? "display:relative; z-index: 1; left:100px; position: fixed;"
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

const Element = styled.div`
  margin-top: 10px;
  color: white;
  transition: all ease 0.5s;
  &:hover {
    color: #00ffd5;
  }
  border-bottom: 1px solid gray;
`;

const MainDisplay = styled(Link)`
  position: absolute;
  transform: translateX(-120%);
  left: 100%;
  color: white;
  text-decoration-line: none;
`;

interface APIData {
  name: string;
}

const Menu = () => {
  const [click, getClick] = React.useState(false);
  const [menu, getClickMenu] = React.useState(false);
  const [data, getData] = React.useState<string[]>([]);

  const getRepo = async () => {
    try {
      let GitRepoList: string[] = [];
      const res = await GitAPI.getAllRepo();
      res.data.map((result: APIData) => GitRepoList.push(result.name));
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
          <div className="topic">
            <Topic>Github</Topic>
            {data.map((name: string, index) => (
              <Link
                key={index}
                style={{ textDecorationLine: "none" }}
                to={`/github/${name}`}
                state={{ repo: name }}
              >
                <Element>{name}</Element>
              </Link>
            ))}
          </div>
          <div className="topic">
            <Topic>Study</Topic>
            <a href="https://velog.io/@ryuyh2000?tag=React">
              <Element>React</Element>
            </a>
            <a href="https://velog.io/@ryuyh2000?tag=JavaScript">
              <Element>JavaScript</Element>
            </a>
            <a href="https://velog.io/@ryuyh2000?tag=TypeScript">
              <Element>TypeScript</Element>
            </a>
            <a href="https://velog.io/@ryuyh2000/series/%EA%B0%9C%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8">
              <Element>Personal Project</Element>
            </a>
          </div>
        </ul>
      </Manual>

      <MainDisplay to="/">
        <Element>Home</Element>
      </MainDisplay>
    </Container>
  );
};

export default Menu;
