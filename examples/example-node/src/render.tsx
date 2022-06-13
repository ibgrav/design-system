import { ButtonTemplate } from "@ibgrav/design-system";
import { renderToStaticMarkup } from "react-dom/server";
import { Document } from "./Document";

export function render() {
  return renderToStaticMarkup(
    <Document>
      <h1>Hello world!</h1>
      <ButtonTemplate register />
    </Document>
  );
}
