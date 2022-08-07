
const express = require("express");
const budgetRoutes = require('./scr/budget/routes');


const app = express();
const port = 8080;

//** set the location of static files */
app.use(express.static("public"));


app.use(express.json());

app.get("/", (req,res)=> {
  res.send("hello world");
});

//**Calling a router */
app.use('/api/budget', budgetRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});