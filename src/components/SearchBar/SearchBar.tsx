import React from "react";
import SearchSVG from "../../assets/icons/search.svg";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Catch 'em all by searching here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {!value && <img src={SearchSVG} className="search-icon" />}
    </div>
  );
};
