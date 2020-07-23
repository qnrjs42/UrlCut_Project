const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const apiRoutes = require("./server/routes/index.js");

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use("/api", apiRoutes);

    server.listen(5000, (err) => {
      if (err) throw err;
      console.log("> Ready on Server Port: 5000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
