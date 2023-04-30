import FrogElement from "./FrogElement"; // importing the FrogElement component
import styled from "styled-components"; // importing styled-components library

const FrogList = ({ frogs, selectFrog, postsByID }) => { // defining a functional component called FrogList that takes three props: an array of frog objects, a selectFrog function, and an object containing posts data by frog id
  const allFrogs = frogs.map((frog) => { // creating a new array called allFrogs, by looping through the frog objects using the map method
    const posts = postsByID[frog._id] || []; // retrieving the posts of each frog using the postByID object, or setting it to an empty array if there are no posts
    return (
      <FrogElement // rendering a FrogElement component for each frog, passing in the selectFrog function, the frog object, and its corresponding posts
        selectFrog={selectFrog}
        frog={frog}
        key={frog._id}
        posts={posts}
      />
    );
  });

  return ( // rendering the list of all frogs and their respective posts using styled components
    <ListContainer>
      <h2>Frog List</h2>
      <StyledList>{allFrogs}</StyledList>
    </ListContainer>
  );
};

const ListContainer = styled.section` // defining a styled-component called ListContainer
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StyledList = styled.ul` // defining a styled-component called StyledList
  list-style: none;
  width: 33.33%;
`;

export default FrogList; // exporting the FrogList component
