import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      onClick={setToggleMenu}
      aria-label="Toggle navigation menu"
      className="flex items-center justify-center p-3 text-2xl text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200 ease-in-out"
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
