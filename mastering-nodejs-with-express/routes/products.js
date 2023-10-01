const express = require("express");

const { data } = require("../data");

const route = express.Router();

route.get("/", (req, res) => {
  res.send(data);
});

route.get("/:id", (req, res) => {
  const productId = Number.parseInt(req.params.id);
  const product = data.find((product) => product.id === productId);
  res.json(product);
});

let currentProductId = 9;
route.post("/", (req, res) => {
  const { name, imageURL, type } = req.body;
  const product = {
    id: ++currentProductId,
    name,
    imageURL,
    type,
  };
  data.push(product);
  res.json(product);
});

route.put("/:id", (req, res) => {
  const { name, imageURL, type } = req.body;
  const productId = Number.parseInt(req.params.id);
  const product = data.find((product) => product.id === productId);

  product.name = name;
  product.imageURL = imageURL;
  product.type = type;

  res.json(product);
});

route.delete("/:id", (req, res) => {
  const productId = Number.parseInt(req.params.id);
  const product = data.find((product) => product.id === productId);
  data.splice(product, 1);
  res.sendStatus(204);
});

module.exports = route;
