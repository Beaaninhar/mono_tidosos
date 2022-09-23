const express = require("express");

const routes = express.Router();

routes.get("/healthcheck", (req, res) => {
  return res.json({ data: "Olá, mundo!" });
});

module.exports = routes;
