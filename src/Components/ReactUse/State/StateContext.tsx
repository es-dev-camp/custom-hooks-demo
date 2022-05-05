import { createStateContext } from 'react-use';

const [useSharedText, SharedTextProvider] = createStateContext('');

const ComponentA = () => {
  const [text, setText] = useSharedText();
  return (
    <div>
      Component A:
      <br />
      <input type="text" value={text} onInput={ev => {
        // @ts-ignore
        setText(ev.target.value);
      }} />
    </div>
  );
};

const ComponentB = () => {
  const [text, setText] = useSharedText();
  return (
    <div>
      Component B:
      <br />
      <input type="text" value={text} onInput={ev => {
        // @ts-ignore
        setText(ev.target.value);
      }} />
    </div>
  );
};

const StateContext = () => {
  return (
    // @ts-ignore
    <SharedTextProvider>
      <p>Those two fields share the same value.</p>
      <ComponentA />
      <ComponentB />
    </SharedTextProvider>
  );
};
export default StateContext;
