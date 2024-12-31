const Dog = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="dog" width="300px" />
    <p>{props.color}  </p>
    </div>
  );
};

export default Dog;
