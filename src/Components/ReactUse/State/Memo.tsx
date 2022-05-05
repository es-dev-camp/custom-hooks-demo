import { createMemo } from 'react-use';

const fibonacci = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const useMemoFibonacci = createMemo(fibonacci);

const Memo = () => {
  const result = useMemoFibonacci(10);

  return (
    <div>
      fibonacci(10) = {result}
    </div>
  );
};

export default Memo;
