import { useState } from "react";
import { ButtonTemplate } from "./Button.template";

export const Button = () => {
  const [count, setCount] = useState(0);

  return <ButtonTemplate count={count} onClick={() => setCount((c) => c + 1)} />;
};
