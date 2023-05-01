import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
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
import NavBar from "../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FrogProfile from "../components/FrogProfile/FrogProfile";
import PageNotFound from "../components/PageNotFound/PageNotFound";

const LilyPadContainer = () => {
  const [frogs, setFrogs] = useState([]);
  const [loggedFrog, setLoggedFrog] = useState(null);
  const [selectedFrog, setSelectedFrog] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () =>{
    Promise.all([getFrogs(), getPosts()]).then(([frogsData, postsData]) => {
      setFrogs(frogsData);
      setPosts(postsData);
    });
  }

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

  const handleProfileRender = (fgro) => {
    setSelectedFrog(fgro);
  };

  const postsReversed = [...posts].reverse();

  const logOut = () => {
    setLoggedFrog(null)
  }

  return (
    <>
      <StyledHeader>Lilypad</StyledHeader>
      <Router>
        <NavBar loggedFrog={loggedFrog} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                selectedFrog={selectedFrog}
                loggedFrog={loggedFrog}
                addPost={addPost}
                posts={postsReversed}
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
            element={
              <SignLog
                addFrog={addFrog}
                frogs={frogs}
                selectLoggedinFrog={selectLoggedinFrog}
                logOut={logOut}
                loggedFrog={loggedFrog}
                fetchData={fetchData}
              />
            }
          />
          <Route
            path=":id/profile"
            element={
              <FrogProfile
                loggedFrog={loggedFrog}
                selectedFrog={selectedFrog}
                handleProfileRender={handleProfileRender}
                addPost={addPost}
                posts={posts}
                frogs={frogs}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(3px);
  }
`;

const StyledHeader = styled.div`
  background-color: #84db2c;
  color: red;
  padding-bottom: 1rem;
  font-size: 2.75rem;
  text-align: center;
  font-family: "Bungee", cursive;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;

  &:hover {
    color: white;
    cursor: pointer;
    }
`;

export default LilyPadContainer;
