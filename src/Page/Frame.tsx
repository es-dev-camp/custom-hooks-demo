import Content from "../Component/ReactUse/Content";

const Frame = (): JSX.Element => {
  const onClickMenu = () => {
    console.log("onClickMenu => Empty command");
  };
  return (
    <>
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
          <a className="btn btn-ghost normal-case text-xl">Custom Hooks Demo</a>
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
      <div className="drawer drawer-mobile p-2 pt-16">
        <input
          id="hooks-list-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-side">
          <label htmlFor="hooks-list-drawer" className="drawer-overlay" />
          <ul className="menu px-2 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <li className="text-xl font-medium bg-primary rounded-lg">
              <a>react-use</a>
            </li>
          </ul>
        </div>
        <div className="drawer-content">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Frame;
