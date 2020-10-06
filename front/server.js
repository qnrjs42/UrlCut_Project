const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const next = require("next");
const dotenv = require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

const apiRoutes = require("./server/routes");


app
  .prepare()
  .then(() => {
    const server = express();

    server.use(
      cors({
        origin: `http://localhost:${port}`,
        credentials: true,
      })
    );
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    
    
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use("/api", apiRoutes);

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on Server Port: ${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
