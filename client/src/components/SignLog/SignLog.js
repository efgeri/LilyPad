import FrogForm from "../FrogForm/FrogForm";
import Login from "./Login";

const SignLog = ({ addFrog, frogs, selectLoggedinFrog, logOut, loggedFrog }) => {

  const handleLogOut = () => {
    console.log('peace out breaches');
    logOut()
  }

  return (
    <>
      {loggedFrog ? <button onClick={handleLogOut}>Peace out</button> : <FrogForm addFrog={addFrog} />}      
      <Login frogs={frogs} selectLoggedinFrog={selectLoggedinFrog} />
    </>
  );
};

export default SignLog;
