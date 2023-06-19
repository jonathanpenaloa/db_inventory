const express = require("express");
const port = 4002;
const app = express();
const cors = require("cors");

require("dotenv").config();
require("./config/database.js");

const inventoryApi = require("./controller/inventory.js");


app.use(express.json());
app.use(cors())


app.get("/inventory", inventoryApi.getAllItems);

app.post("/inventory", inventoryApi.createItem);

app.listen(port, () => {
    console.log(`Express app running on port: ${port}`);
})