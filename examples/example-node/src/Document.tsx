import type { ReactNode } from "react";
import { version } from "../node_modules/@ibgrav/design-system/package.json";

const src = (name: string) => `https://www.unpkg.com/@ibgrav/design-system@${version}/dist/assets/${name}`;

interface DocumentProps {
  children: ReactNode;
}

export function Document({ children }: DocumentProps) {
  return (
    <>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Harvard Business School</title>

          <link rel="preload" crossOrigin="anonymous" href={src("client.css")} as="style" />
          <link rel="preload" crossOrigin="anonymous" href={src("client.js")} as="script" />

          <link href={src("client.css")} crossOrigin="anonymous" rel="stylesheet" />
        </head>
        <body>
          {children}
          <script src={src("client.js")} crossOrigin="anonymous" type="module"></script>
        </body>
      </html>
    </>
  );
}
