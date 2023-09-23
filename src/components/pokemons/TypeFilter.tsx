import { TbFilter } from "react-icons/tb";
import { pokemonTypes } from "../../data/pokemonTypes.ts";

type TypeFilterProps = {
  handleSelectTypeFilter: (value: string) => void;
};

const TypeFilter = ({ handleSelectTypeFilter }: TypeFilterProps) => {
  return (
    <div className="flex items-center space-x-2">
      <p className="flex items-center space-x-1">
        <TbFilter /> <span className="text-sm font-medium">Type :</span>
      </p>
      <select
        className="border px-2 py-1 rounded-lg"
        onChange={(e) => handleSelectTypeFilter(e.target.value)}
      >
        <option value=""></option>
        {pokemonTypes.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default TypeFilter;
