import { useDefault } from 'react-use';

const Default = () => {
  const initialUser = { name: 'Marshall' }
  const defaultUser = { name: 'Mathers' }
  const [user, setUser] = useDefault(defaultUser, initialUser);

  return (
    <div>
      <div>User: {user.name}</div>
      <input onChange={e => setUser({ name: e.target.value })} />
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => setUser(null)}>set to null</button>
    </div>
  );
};

export default Default;
