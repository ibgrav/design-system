import { forwardRef, MouseEventHandler, useState } from "react";

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  count?: number;
  register?: boolean;
}

export const ButtonTemplate = forwardRef<HTMLButtonElement, ButtonProps>(({ count = 0, onClick, register }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      data-component={register ? "button" : undefined}
      className="border-2 border-red-900 px-4 py-1 rounded"
    >
      count <span>{count}</span>
    </button>
  );
});

export const Button = () => {
  const [count, setCount] = useState(0);

  return <ButtonTemplate count={count} onClick={() => setCount((c) => c + 1)} />;
};
