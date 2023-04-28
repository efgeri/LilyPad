import FrogElement from "./FrogElement";

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
            <ul>
                {allFrogs}
            </ul>
        </section>
      );
}
 
export default FrogList;