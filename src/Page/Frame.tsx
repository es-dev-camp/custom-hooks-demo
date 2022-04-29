import Content from "../Component/ReactUse/Content";

const Frame = (): JSX.Element => {
  const onClickMenu = () => {
    console.log('onClickMenu => Empty command');
  };
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50">
        <div className="flex-none">
          <label htmlFor="hooks-list-drawer" className="btn btn-square btn-ghost drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="drawer drawer-mobile h-full">
        <input id="hooks-list-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="hooks-list-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <li className="bg-primary">
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
