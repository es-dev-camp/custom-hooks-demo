import { useIdle } from "react-use";

const Idle = (): JSX.Element => {
  const idleTime = 3e3;
  const isIdle = useIdle(idleTime);

  return (
    <div>
      <p>無操作で{idleTime}ミリ秒経過するとアイドリング状態と判定される</p>
      <div>User is idle: {isIdle ? 'Yes 😴' : 'Nope'}</div>
    </div>
  );
};

export default Idle;
