import { createServer } from "http";
import { render } from "./render";

const server = createServer((req, res) => {
  res.statusCode = 200;

  if (!res.headersSent) {
    res.setHeader("content-type", "text/html");
    res.end(render());
  }
});

server.listen(3000, "0.0.0.0", () => {
  console.log("http://localhost:3000");
});
