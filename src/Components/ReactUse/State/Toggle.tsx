import { useToggle } from 'react-use';

const Toggle = () => {
  const [on, toggle] = useToggle(true);

  return (
    <div>
      <div>{on ? 'ON' : 'OFF'}</div>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={toggle}>Toggle</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => toggle(true)}>set ON</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => toggle(false)}>set OFF</button>
    </div>
  );
};

export default Toggle;
