const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send(
    '<form action="/" method="POST" onsubmit="localStorage.setItem(`username`,document.querySelector(`#userName`).value)"><input id="userName" type="text" name="userName"/><button type="submit">Add User</button></form>'
  );
});

module.exports = router;
