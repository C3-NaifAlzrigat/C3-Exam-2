const express = require("express");
const cors = require("cors");
require("../back-end/db");
const app = express();

app.use(express.json())
app.use(cors());

const bookRouter=require("../back-end/routers/routes/books");
app.use("/",bookRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
