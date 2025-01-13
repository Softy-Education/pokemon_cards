import { useState } from "react";
import CircleTopRight from "../assets/icons/circle1.svg";
import CircleTopLeft from "../assets/icons/circle2.svg";
import CircleBottomLeft from "../assets/icons/circle3.svg";
import CircleBottomRight from "../assets/icons/circle4.svg";
import Logo from "../assets/icons/logo.svg";
import Footer from "../components/Footer/Footer";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { TypeFilter } from "../components/TypeFilter/TypeFilter";
import usePokemon from "../hooks/usePokemon";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import "./_App.scss";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const { pokemons } = usePokemon({
    searchTerm,
    selectedType,
  });

  return (
    <div className="container">
      <div className="container-background">
        <img src={CircleTopLeft} alt="Circle" />
        <img src={CircleTopRight} alt="Circle" />
        <img src={CircleBottomLeft} alt="Circle" />
        <img src={CircleBottomRight} alt="Circle" />
      </div>
      <div className="text-center">
        <div className="header">
          <img src={Logo} alt="Pokémon Logo" className="mx-auto mt-8" />
          <p>Uncover Hidden Pokémon Gems!</p>
        </div>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <TypeFilter
          selectedType={selectedType}
          onTypeSelect={setSelectedType}
        />
        <div className="grid">
          {pokemons?.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
