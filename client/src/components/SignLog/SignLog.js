import FrogForm from "../FrogForm/FrogForm";
import Login from "./Login";

const SignLog = ({ addFrog, frogs, selectLoggedinFrog, logOut }) => {

  const handleLogOut = () => {
    console.log('peace out breaches');
    // logOut()
  }

  return (
    <>
      <button onClick={() => handleLogOut}>Peace out</button>
      <FrogForm addFrog={addFrog} />
      <Login frogs={frogs} selectLoggedinFrog={selectLoggedinFrog} />
    </>
  );
};

export default SignLog;
