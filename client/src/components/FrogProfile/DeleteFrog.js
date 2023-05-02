const DeleteFrog = ({loggedFrog, deleteFrogAccount}) => {
    const handleAccountDelete = () => {
        if (!window.confirm("Are you sure you want to delete your profile?")) {
            return;
          }
        deleteFrogAccount(loggedFrog._id)
    }
    return (  
        <>
        <button onClick={handleAccountDelete}>Delete Account</button>


        </>

    );
}
 
export default DeleteFrog;