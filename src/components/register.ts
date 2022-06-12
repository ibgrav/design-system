export type RegisterFn<E extends Element> = (element: E) => void;

export const componentRegistery: Record<string, () => Promise<{ register: RegisterFn<any> }>> = {
  button: () => import("./Button/button.register"),
};

export async function registerComponents() {
  const elements = document.querySelectorAll("[data-component]");

  elements.forEach(async (element) => {
    const name = element.getAttribute("data-component");

    if (name && componentRegistery[name]) {
      console.log("registering", name);

      const { register } = await componentRegistery[name]();

      if (!element.getAttribute("data-component-registered")) {
        element.setAttribute("data-component-registered", "true");
        register(element);
      }
    }
  });
}
