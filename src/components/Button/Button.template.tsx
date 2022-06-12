import { forwardRef, MouseEventHandler } from "react";

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
      className="border-2 border-green-700 px-4 py-1 rounded"
    >
      count <span>{count}</span>
    </button>
  );
});
