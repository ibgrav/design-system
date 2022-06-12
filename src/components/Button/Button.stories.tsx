import type { ComponentMeta } from "@storybook/react";
import { ButtonTemplate, Button } from "./Button";

export default {
  title: "Dev/Button",
  component: ButtonTemplate,
} as ComponentMeta<typeof ButtonTemplate>;

export const Template = () => {
  return <ButtonTemplate />;
};

export const Registered = () => {
  return <ButtonTemplate register />;
};

export const Hooked = () => {
  return <Button />;
};
