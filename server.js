const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const authRouter = require("./authorization/authRouter");
const subRouter = require("./submissions/submissionsRouter");
// const { restricted } = require("./authorization/restricted");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/sub", subRouter);

// server.use("/api/tech", restricted, techRouter);

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
