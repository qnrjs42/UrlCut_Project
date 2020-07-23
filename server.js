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

    server.listen(9090, (err) => {
      if (err) throw err;
      console.log("> Ready on Server Port: 9090");
    });

    server.post("/urlCut", (req, res) => {
      if(req) {
        return res.status(200).json({ success: true });
      }
      return  res.status(400).json({ success: false });
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
