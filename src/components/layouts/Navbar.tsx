import { TbHome2, TbPokeball } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <div>
        <Link to="/" className="flex items-center space-x-1">
          <img src="/pokeball.png" alt="Pokéball Icon" width={40} />
          <span className="hidden sm:block font-bold text-lg">Pokédex</span>
        </Link>
      </div>
      <div className="flex space-x-4 font-bold">
        <Link to="/" className="flex space-x-1 items-center">
          <span>
            <TbHome2 />
          </span>
          <span>Home</span>
        </Link>
        <Link to="/my-pokemon" className="flex space-x-1 items-center">
          <span>
            <TbPokeball />
          </span>
          <span>My Pokémon</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
