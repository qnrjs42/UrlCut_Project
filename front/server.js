const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const apiRoutes = require("./server/routes");


app
  .prepare()
  .then(() => {
    const server = express();

    server.use(
      cors({
        origin: "http://localhost:5000",
        credentials: true,
      })
    );
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    
    
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
