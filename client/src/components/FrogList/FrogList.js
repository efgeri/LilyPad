import FrogElement from "./FrogElement";
import styled from "styled-components"

const FrogList = ({ frogs, selectFrog }) => {
    const allFrogs = frogs.map((frog) => {
        return (
          <FrogElement
          selectFrog={selectFrog}
            frog={frog}
            key={frog._id}
          />
        );
      });
    return (
        <section>
            <StyledList>
                {allFrogs}
            </StyledList>
        </section>
      );
}

const StyledList = styled.ul`
display: flex;
list-style: none;
`
 
export default FrogList;