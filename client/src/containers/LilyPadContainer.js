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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const selectLoggedinFrog = (frog) => {
    setLoggedFrog(frog);
  };


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
          <Link to="/frogdetails">
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
            element={<SignLog addFrog={addFrog} frogs={frogs} selectLoggedinFrog={selectLoggedinFrog}/>}
          />
          <Route path="/frogdetails" element={<FrogDetails />} />
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
  &:hover {
    color: white;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  a:hover {
    background-color: #ddd;
  }
  &:hover {
    display: block;
  }
`;

const Dropdown = styled.div`
  font-size: inherit;
  border: none;
  outline: none;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
  &:hover {
    background-color: red;
  }
  &:hover ${DropdownContent} {
    display: block;
  }
`;

const DropdownButton = styled.button`
  background-color: red;
  font-size: inherit;
  border: none;
  outline: none;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  &:hover {
    color: white;
  }
`;

export default LilyPadContainer;
