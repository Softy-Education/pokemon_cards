export interface PokemonStat {
  name: string;
  value: number;
}

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  color: string;
  image: string;
  overlayImage: string;
  weight: number;
  height: number;
  stats: PokemonStat[];
}
