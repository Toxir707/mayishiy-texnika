const { join } = require("node:path");
const { config } = require("dotenv");
const express = require("express");
const productRouter = require("./route/product.route");
const categoryRoute = require("./route/category.route")
const query = require('./database/pg');
const categoryModel = require('./models/category.models');
const productModel = require('./models/product.models');

config();

const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.set("view", join(process.cwd(), "src", "view"));

app.use('/api', categoryRoute);
app.use('/api/v1', productRouter);

async function createTables() {
    await query(categoryModel);
    await query(productModel);
}

createTables();


app.listen(+process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`);
});


