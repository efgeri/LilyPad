import FrogForm from "../FrogForm/FrogForm";
import Login from "./Login"

const SignLog = ({addFrog, frogs}) => {
  return ( 
    <>
    <FrogForm addFrog={addFrog} />
    <Login />
    </>
   );
}
 
export default SignLog;