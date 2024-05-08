import Header from "./components/Header";
import Main from "./components/Main";
import PokemonList from "./components/PokemonList";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon/";

const App = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "",
    type: "",
    move: "",
  });
  const [arrayOfPokemon, setarrayOfPokemon] = useState([]);
  const [updatePokemon, setUpdatePokemon] = useState(true);

  useEffect(() => {
    let id = randomPokeNumber();

    async function fetchData() {
      const response = await fetch(URL + id, { mode: "cors" });
      const data = await response.json();
      return data;
    }

    fetchData().then((data) => {
      const newPokemon = {
        name: capitalize(data.species.name),
        img: data.sprites.front_default,
        type: capitalize(data.types[0].type.name),
        move: capitalize(data.moves[1].move.name),
      };
      setPokemon(newPokemon);
      setarrayOfPokemon([...arrayOfPokemon, newPokemon.name]);
    });
  }, [updatePokemon]);

  function handleClick() {
    const newValue = !updatePokemon;
    setUpdatePokemon(newValue);
  }

  function capitalize(string) {
    const firstLetter = string.charAt(0);
    const stringBody = string.substring(1);
    return firstLetter.toUpperCase() + stringBody;
  }

  function randomPokeNumber() {
    return Math.ceil(Math.random() * 151);
  }

  return (
    <>
      <Header />
      <Main
        pokemonName={pokemon.name}
        pokemonImg={pokemon.img}
        type={pokemon.type}
        move={pokemon.move}
      />
      <PokemonList list={arrayOfPokemon} />
      <Footer handleClick={handleClick} />
    </>
  );
};

export default App;
