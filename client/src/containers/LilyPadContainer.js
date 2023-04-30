import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  Link,
} from "react-router-dom";
import FrogList from "../components/FrogList/FrogList";
import PostList from "../components/Posts/PostList";
import { getFrogs } from "../services/FrogServices";
import { getPosts } from "../services/PostServices";
import PostForm from "../components/PostForm/PostForm";
import FrogForm from "../components/FrogForm/FrogForm";
import { createPost } from "../services/PostServices";
import { createFrog } from "../services/FrogServices";
import HomePage from "../components/FrogHome/HomePage";
import SignLog from "../components/SignLog/SignLog";
import FrogDetails from "../components/FrogDetails/FrogDetails";
import FrogProfile from "../components/FrogProfile/FrogProfile";

const LilyPadContainer = () => {
  const [frogs, setFrogs] = useState([]);
  const [loggedFrog, setLoggedFrog] = useState(null);
  const [selectedFrog, setSelectedFrog] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Promise.all([getFrogs(), getPosts()]).then(([frogsData, postsData]) => {
      setFrogs(frogsData);
      setPosts(postsData);
    });
  }, []);

  const addPost = (originalPost) => {
    createPost(originalPost).then((savedPost) =>
      setPosts([...posts, savedPost])
    );
  };

  const addFrog = (newFrog) => {
    createFrog(newFrog).then((savedFrog) => setFrogs([...frogs, savedFrog]));
  };

  const selectFrog = (frog) => {
    setSelectedFrog(frog);
  };

  const selectLoggedFrog = (frog) => {
    setSelectedFrog(frog);
  }
  

  return (
    <>
      <StyledHeader>LILYPAD CONTAINER</StyledHeader>
      <Router>
        <NavigationBar>
          <Link to="/">
            <NavigationBarElement>Home</NavigationBarElement>
          </Link>
          <Link to="/frogs">
            <NavigationBarElement>Frogs</NavigationBarElement>
          </Link>
          <Link to="/profile">
            <NavigationBarElement>Profile</NavigationBarElement>
          </Link>
          <Link to="/signlog">
            <NavigationBarElement>Frog-In</NavigationBarElement>
          </Link>
        </NavigationBar>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  selectedFrog={selectedFrog}
                  loggedFrog={loggedFrog}
                  addPost={addPost}
                  posts={posts}
                  frogs={frogs}
                />
              }
            />
            <Route
              path="/frogs"
              element={<FrogList selectFrog={selectFrog} frogs={frogs} />}
            />
            <Route
              path="/signlog"
              element={<SignLog addFrog={addFrog} frogs={frogs} />}
            />
            <Route path="/profile" element={<FrogProfile loggedFrog={loggedFrog} selectedFrog={selectedFrog} selectLoggedFrog={selectLoggedFrog} />} />
          </Routes>
      </Router>
    </>
  );
};

const StyledHeader = styled.div`
  background-color: #84db2c;
  color: white;
  padding-bottom: 0.5rem;
  font-size: 2.75rem;
  text-align: center;
  font-family: "Bungee", cursive;
`;

const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #84db2c;
  padding-bottom: 0.5rem;
  font-size: 2rem;
  text-align: center;
  justify-content: space-between;
  padding-inline: 10rem;
  font-family: "Bungee", cursive;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NavigationBarElement = styled.div`
  color: #fc0000;
`;


export default LilyPadContainer;
