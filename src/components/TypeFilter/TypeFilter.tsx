import React from "react";
import FilterButton from "../FilterButton/FilterButton";
import { Filters } from "../../constants/filtersData";

interface TypeFilterProps {
  selectedType: string;
  onTypeSelect: (type: string) => void;
}

export const TypeFilter: React.FC<TypeFilterProps> = ({
  selectedType,
  onTypeSelect,
}) => {
  return (
    <div className="type-filters">
      {Filters.map((filter, index) => (
        <FilterButton
          key={index}
          label={filter?.label}
          onClick={() =>
            onTypeSelect(selectedType === filter?.label ? "" : filter?.label)
          }
          isActive={selectedType === filter?.label}
        />
      ))}
    </div>
  );
};
