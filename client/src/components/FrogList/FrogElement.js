const FrogElement = ({ frog }) => {
  return (
    <li>
      <p>{frog.name}</p>
      <img src={`${frog.image_url}`} alt={`${frog.name}'s profile picture`} />
    </li>
  );
};

export default FrogElement;
