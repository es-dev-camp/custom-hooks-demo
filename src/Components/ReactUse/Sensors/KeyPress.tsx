import { useKeyPress } from "react-use";

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const KeyPress = (): JSX.Element => {
  const states = [];
  for (const key of keys) states.push(useKeyPress(key)[0]);

  return (
    <div style={{textAlign: 'center'}}>
      押下されている数値キーを列挙
      <br />
      {states.reduce((s, pressed, index) => s + (pressed ? (s ? ' + ' : '') + keys[index] : ''), '')}
    </div>
  );
};

export default KeyPress;
