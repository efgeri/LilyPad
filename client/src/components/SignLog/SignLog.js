import FrogForm from "../FrogForm/FrogForm";
import Login from "./Login";

const SignLog = ({ addFrog, frogs, selectLoggedinFrog, logOut, loggedFrog, fetchData }) => {

  const handleLogOut = () => {
    console.log('peace out breaches');
    logOut()
  }

  return (
    <>
      {loggedFrog ? <button onClick={handleLogOut}>Peace out</button> : <FrogForm addFrog={addFrog} fetchData={fetchData}/>}      
      <Login frogs={frogs} selectLoggedinFrog={selectLoggedinFrog} />
    </>
  );
};

export default SignLog;
