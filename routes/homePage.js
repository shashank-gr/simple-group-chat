const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
  // we are using a bit of front end manupilation, where we are sending a input box as hidden and whose value is getting updated onsubmit, by taking value from localStorage
  res.send(
    `
      <form action="/msg" method="POST" onsubmit='document.querySelector("#userName").value=localStorage.getItem("username")'>
      <input type="hidden" name=userName id="userName" />
      <input type="text" name="msg"/>
      <button type="submit">send message</button></form>`
  );
});

router.post("/msg", (req, res) => {
  //req.body will be now a object {userName:"shashanka",msg:"message_text"}
  // console.log(req.body);
  fs.appendFile(
    "message.txt",
    `${req.body.userName} : ${req.body.msg} `, //appending the message in this format userName : msg
    (error) => {
      error ? console.log(error) : res.redirect("/");
    }
  );
});

router.get("/", (req, res) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No Data is present"; //excecutes only when there is err like message.txt is not present
    }
    res.send(
      `<p>${data}</p></hr>
      <form action="/msg" method="POST" onsubmit='document.querySelector("#userName").value=localStorage.getItem("username")'>
      <input type="hidden" name=userName id="userName" />
      <input type="text" name="msg"/>
      <button type="submit">send message</button></form>`
    );
  });
});

module.exports = router;
