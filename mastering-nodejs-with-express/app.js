const express = require("express");
const morgan = require("morgan");

const productRoutes = require("./routes/products");

const { connect, sync } = require("./config/database");

async function initializeDatabase() {
  await connect();
  await sync();
}
initializeDatabase();

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
