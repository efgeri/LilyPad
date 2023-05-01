import { useParams } from "react-router-dom";

const GetID = () => {
    const { squirrel }  = useParams()
    const param = useParams()
    console.log(param)

    return ( 
        <h1>Hello {`${squirrel}`}</h1>
     );
}
 
export default GetID;