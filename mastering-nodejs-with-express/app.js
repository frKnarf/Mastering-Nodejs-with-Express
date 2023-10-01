const express = require("express");
const morgan = require("morgan");

const productRoutes = require("./routes/products");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
