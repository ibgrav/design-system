import { createServer } from "http";
import { Page } from "./Page";
import { render } from "./render";

const server = createServer((req, res) => {
  try {
    const doc = render(<Page />);

    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end(doc);
  } catch (e) {
    res.statusCode = 500;
    res.end(e.stack);
  }
});

server.listen(3000, "0.0.0.0", () => {
  console.log("http://localhost:3000");
});
