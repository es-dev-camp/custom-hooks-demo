import { useNavigate } from "react-router-dom";

import { ReactComponent as HamburgerMenu } from "../../Assets/Images/HamburgerMenu.svg";
import { ReactComponent as MeatballMenu } from "../../Assets/Images/MeatballMenu.svg";

const Navbar = (): JSX.Element => {
  const navigate = useNavigate();
  const onClickMenu = () => {
    console.log("onClickMenu => Empty command");
  };

  return (
    <nav className="navbar fixed bg-base-100 top-0 z-50 p-0">
      <div className="flex-none">
        <label
          htmlFor="hooks-list-drawer"
          className="btn btn-square btn-ghost drawer-button"
        >
          <HamburgerMenu className="inline-block w-5 h-5 stroke-current" />
        </label>
      </div>
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={() => navigate("/")}
        >
          Custom Hooks Demo
        </a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={onClickMenu}>
          <MeatballMenu className="inline-block w-5 h-5 stroke-current" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
