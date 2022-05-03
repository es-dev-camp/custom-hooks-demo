import { useSpeech } from "react-use";

const voices = window.speechSynthesis.getVoices();

const Speech = () => {
  const state = useSpeech("Hello world!", {
    rate: 0.8,
    pitch: 0.5,
    // TODO: 何も取得できないことがあるのと、任意のタイミングで再生するとかの使い方は分からない
    voice: voices[0],
  });

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};

export default Speech;
