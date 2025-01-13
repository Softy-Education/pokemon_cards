import { Filters } from "../../constants/filtersData";

interface FilterButtonProps {
  label: string;
  onClick?: () => void;
  showLabel?: boolean;
  isActive?: boolean;
}

const FilterButton = ({
  label,
  showLabel = true,
  onClick,
  isActive = false,
}: FilterButtonProps) => {
  const filter = Filters.find(
    (filter) => filter.label?.toLocaleLowerCase() === label?.toLocaleLowerCase()
  );

  return (
    <button
      className={`filter-button ${isActive ? "active-filter-button" : ""}`}
      onClick={() => onClick?.()}
      style={{
        color: filter?.color,
        borderColor: filter?.color,
      }}
    >
      <img src={filter?.icon} />
      {showLabel && <span>{label}</span>}
    </button>
  );
};

export default FilterButton;
