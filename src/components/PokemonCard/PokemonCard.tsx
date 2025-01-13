import { Pokemon } from "../../types/pokemon";
import { lightenColorToRGB } from "../../utils/lightenColor";
import FilterButton from "../FilterButton/FilterButton";

const getActiveStatsBars = (statValue: number) => {
  return Math.round(statValue / 13.3);
};

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const lightenedColor = lightenColorToRGB(pokemon?.color, 50);
  const lightenedColor60 = lightenColorToRGB(pokemon?.color, 60);

  return (
    <div className="pokemon-card">
      <div className="card-inner">
        <div
          className="card-front"
          style={{
            backgroundImage: `linear-gradient(180deg, ${pokemon?.color} 0%, #210900 100%)`,
            boxShadow: `2px 2px 9px 0px ${lightenedColor}`,
          }}
        >
          <div className="pokemon-info">
            <p className="pokemon-name">{pokemon?.name}</p>
            <p>#{pokemon?.id}</p>
          </div>
          <div className="pokemon-image">
            <img
              src={pokemon?.overlayImage}
              alt={pokemon?.name}
              className="pokemon-image-overlay"
            />
            <img src={pokemon?.image} alt={pokemon?.name} />
          </div>
          <div className="types">
            {pokemon?.type.map((type, index) => (
              <FilterButton key={index} label={type} onClick={() => {}} />
            ))}
          </div>
        </div>

        <div
          className="card-back"
          style={{
            background: `linear-gradient(180deg, #1d1900 44.69%, ${pokemon?.color} 142.6%)`,
            boxShadow: `2px 2px 9px 0px ${pokemon?.color}`,
          }}
        >
          <p className="card-back-title">Base Stats</p>
          <div className="card-back-stats">
            {pokemon?.stats.map((stat, index: number) => (
              <div key={index} className="stat">
                <span className="stat-name">{stat.name}</span>
                <span className="stat-value">{stat.value}</span>
                <div className="stat-bar">
                  {Array(15)
                    .fill("")
                    .map((_, index) => {
                      const isActive = index < getActiveStatsBars(stat.value);
                      return (
                        <div
                          key={index}
                          className={`${isActive ? "active" : ""}`}
                          style={{
                            background: isActive
                              ? `linear-gradient(180deg, ${pokemon?.color} 0%, ${pokemon?.color} 100%)`
                              : `linear-gradient(180deg, #999163 0%,${lightenedColor60} 100%)`,
                          }}
                        ></div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>

          <div className="details">
            <div className="details-left" style={{ color: lightenedColor60 }}>
              <p>Height: {pokemon?.height} m</p>
              <p>Weight: {pokemon?.weight} kg</p>
            </div>
            <div
              className="details-devider"
              style={{
                background: lightenedColor60,
              }}
            ></div>
            <div className="details-right">
              {pokemon?.type.map((type, index) => (
                <FilterButton key={index} label={type} showLabel={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
