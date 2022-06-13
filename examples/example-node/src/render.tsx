import { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Document } from "./Document";

export function render(element: ReactNode) {
  return renderToStaticMarkup(<Document>{element}</Document>);
}
