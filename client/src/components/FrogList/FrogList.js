import FrogElement from "./FrogElement";
import styled from "styled-components"

const FrogList = ({ frogs }) => {
    const allFrogs = frogs.map((frog) => {
        return (
          <FrogElement
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
list-style: none;
width: 33.33%
`
 
export default FrogList;