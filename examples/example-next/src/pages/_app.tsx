import type { AppProps } from "next/app";

import "@ibgrav/design-system/dist/assets/client.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
