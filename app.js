const express = require("express");
const bodyParser = require("body-parser");

const loginPage = require("./routes/login");
const homePage = require("./routes/homePage");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(loginPage);
app.use(homePage);

app.use((req, res) => {
  res.status(404).send("<p>Page not found 404</p>");
});

app.listen(3000);
