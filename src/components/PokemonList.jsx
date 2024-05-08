import { nanoid } from "nanoid";

const PokemonList = (props) => {
  const listOfPokemon = props.list.map((poke) => (
    <li key={nanoid()}>{poke}</li>
  ));

  return (
    <div className="container flex flex-col justify-center items-center md mx-auto w-11/12 rounded border-2 border-solid border-slate-700 p-4 my-4">
      <h2 className="text-2xl mb-2">Your Pokemon</h2>
      <ul>{listOfPokemon}</ul>
    </div>
  );
};

export default PokemonList;
