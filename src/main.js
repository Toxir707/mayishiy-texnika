const { join } = require("node:path");
const { config } = require("dotenv");
const express = require("express");
const productRouter = require("./route/product.route");

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("view", join(process.cwd(), "src", "view"));

app.use("/api/v1", productRouter);

app.listen(+process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`);
});