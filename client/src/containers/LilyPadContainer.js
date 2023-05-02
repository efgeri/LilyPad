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
import NavBar from "../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FrogProfile from "../components/FrogProfile/FrogProfile";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import ProfileDeleted from "../components/FrogProfile/ProfileDeleted";

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

  const handleProfileRender = (fgro) => {
    setSelectedFrog(fgro);
  };

  const removeFrog = (deletedFrogId) => {
    setFrogs(frogs.filter((frog) => frog._id !== deletedFrogId));
  };

  // The removeFrog function takes the deleted frog's ID as an argument and updates the frogs state by 
  // filtering out the frog with the specified ID. This way, the deleted frog is removed from the frogs state, 
  // and the updated frog list will be reflected in the application.
  
  console.log("woo:",loggedFrog)
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
            element={
              <SignLog
                addFrog={addFrog}
                frogs={frogs}
                selectLoggedinFrog={selectLoggedinFrog}
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
                removeFrog={removeFrog}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/profile-deleted" element={<ProfileDeleted />} />
          {/* New path for profile-deleted which displays a new page telling the user
          that they have succesfully deleted their profile */}
        </Routes>
      </Router>
    </>
  );
};

const StyledBody = styled.body`
  margin: 0;
`

const StyledHeader = styled.div`
  background-color: #84db2c;
  color: white;
  padding-bottom: 1rem;
  font-size: 2.75rem;
  text-align: center;
  font-family: "Bungee", cursive;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;

export default LilyPadContainer;
