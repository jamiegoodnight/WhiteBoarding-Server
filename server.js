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

// Cloudinary reference
// import express from 'express';
// import { urlencoded, json } from 'body-parser';
// import { resolve } from  'path';
// const app = express();
// const Port = process.env.PORT || 3000;

// app.use(express.static(resolve(__dirname, 'src/public')));
// app.use(urlencoded({ extended: false }));
// app.use(json());

// app.get('/*', (req, res) => res.sendFile(resolve(__dirname, '../public/index.html')));
// app.listen(Port, () => console.log(`Server started at http://localhost:${Port}`));
