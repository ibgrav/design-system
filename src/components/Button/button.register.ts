import type { RegisterFn } from "../register";

export const register: RegisterFn<HTMLButtonElement> = (button: HTMLButtonElement) => {
  const incrementButton = () => {
    const span = button.querySelector("span");
    if (span) {
      const count = Number(span.dataset.count || span.innerHTML || 0);
      span.dataset.count = String(count + 1);
      span.innerHTML = span.dataset.count + " registered!";
    }
  };

  button.addEventListener("click", incrementButton);
};
