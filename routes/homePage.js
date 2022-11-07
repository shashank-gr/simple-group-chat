const express = require("express");
const fs = require("fs");
const router = express.Router();
let user;
router.post("/", (req, res) => {
  // console.log(req.body);
  user = req.body.userName;

  res.send(
    '<form action="/msg" method="POST"><input type="text" name="msg"/><button type="submit">send message</button></form>'
  );
});
router.post("/msg", (req, res) => {
  // console.log(req.body);
  fs.appendFile("message.txt", `${user}:${req.body.msg} `, (error) => {
    res.redirect("/");
  });
});

router.get("/", (req, res) => {
  fs.readFile("message.txt", (err, data) => {
    // console.log(data);
    res.send(
      `<p>${data}</p></hr><form action="/msg" method="POST"><input type="text" name="msg"/><button type="submit">send message</button></form>`
    );
  });
});

module.exports = router;
