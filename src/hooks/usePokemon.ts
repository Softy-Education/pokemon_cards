import { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon } from "../types/pokemon";

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

interface UsePokemonParams {
  searchTerm: string;
  selectedType: string;
}

const usePokemon = ({ searchTerm, selectedType }: UsePokemonParams) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(`${baseUrl}/pokemons`, {
          params: {
            search: searchTerm,
            type: selectedType,
          },
        });
        setPokemons(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, selectedType]);

  return { pokemons, loading, error };
};

export default usePokemon;
