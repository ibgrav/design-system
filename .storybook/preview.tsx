import { FC, useEffect } from "react";
import { registerComponents } from "../src/components/register";

import "../src/styles/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: FC) => {
    useEffect(() => {
      registerComponents();
    }, []);

    return <Story />;
  },
];
