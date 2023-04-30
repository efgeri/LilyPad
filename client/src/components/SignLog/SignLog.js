import FrogForm from "../FrogForm/FrogForm";
import Login from "./Login"

const SignLog = ({addFrog, frogs, selectLoggedinFrog}) => {

  return ( 
    <>
    <FrogForm addFrog={addFrog} />
    <Login frogs={frogs} selectLoggedinFrog={selectLoggedinFrog}/>
    </>
   );
}
 
export default SignLog;