import { useNavigate } from "react-router-dom";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
