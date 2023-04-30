import FrogList from "../FrogList/FrogList";

const Login = ({frogs, selectLoggedinFrog}) => {
  return ( 
    <section>
      <p>Login</p>
      <FrogList frogs={frogs} selectFrog={selectLoggedinFrog}/>
      </section>
   );
}
 
export default Login;