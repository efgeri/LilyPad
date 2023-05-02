import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  Link,
  useNavigate
} from "react-router-dom";
import FrogList from "../components/FrogList/FrogList";
import PostList from "../components/Posts/PostList";
import { getFrogs } from "../services/FrogServices";
import { getPosts } from "../services/PostServices";
import PostForm from "../components/PostForm/PostForm";
import FrogForm from "../components/FrogForm/FrogForm";
import { createPost } from "../services/PostServices";
import { createFrog, deleteFrog, updateFrog } from "../services/FrogServices";
import HomePage from "../components/FrogHome/HomePage";
import SignLog from "../components/SignLog/SignLog";
import NavBar from "../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FrogProfile from "../components/FrogProfile/FrogProfile";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import ProfileDeleted from "../components/ProfileDeleted/ProfileDeleted";
import dayjs from "dayjs";

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

  const handleProfileClick = () => {
    setSelectedFrog(loggedFrog);
  };


  const postsReversed = [...posts].sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());
  


  const logOut = () => {
    setLoggedFrog(null)
  }

  // const navigate = useNavigate()

  const deleteFrogAccount = async (id) => {
    const deletionResult = await deleteFrog(id)
    if (deletionResult.acknowledged) {
      const newfrogArray = frogs.filter((frog) => frog._id !== id)
      setFrogs(newfrogArray)
      setLoggedFrog(null)
      setSelectedFrog(null)
      // navigate('/profile-deleted')
    } else {
      alert("Failed to delete your profile. Please try again.");
    }
  }

  const updateFrogProfile = async (id, updatedFrogProfile) => {
    await updateFrog(id, updatedFrogProfile)
    const frogToEdit = frogs.find((frog) => frog._id === id)
    const frogIndex = frogs.indexOf(frogToEdit)
    frogToEdit.name = updatedFrogProfile.name
    frogToEdit.image_url = updatedFrogProfile.image_url
    const newFrogArray = frogs.toSpliced(frogIndex, 1, frogToEdit)
    setFrogs(newFrogArray)
    setLoggedFrog(frogToEdit)
    setSelectedFrog(frogToEdit)
  }

  return (
    <>
    <PageBreaker>
    <HeaderContainer>
      <StyledHeader>Lilypad</StyledHeader>
      </HeaderContainer>
      <Router>
        <NavBar handleProfileClick={handleProfileClick} loggedFrog={loggedFrog} />
        {/* <Aligner> */}
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
                posts={postsReversed}
                frogs={frogs}
                deleteFrogAccount={deleteFrogAccount}
                updateFrogProfile={updateFrogProfile}
              />
            }
          />
          <Route path="/profile-deleted" element={<ProfileDeleted />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* </Aligner> */}
      </Router>
      </PageBreaker>
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

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  flex-shrink: 0;
  width: 100%;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const PageBreaker = styled.div`
  /* margin: 0px; */

  @media (max-width: 300px) {
  /* display: none; */
  }
`

const Aligner = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

`

export default LilyPadContainer;
