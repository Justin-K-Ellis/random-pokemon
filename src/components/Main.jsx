const Main = (props) => {
  return (
    <div className="container flex flex-col justify-center items-center md mx-auto w-11/12 sm:w-3/5 rounded border-2 border-solid border-slate-700 p-4 my-4">
      <h2 className="text-xl">{props.pokemonName}</h2>
      <img src={props.pokemonImg} alt="" />
      <p>{props.type} type</p>
      <p>Best move: {props.move}</p>
    </div>
  );
};

export default Main;
