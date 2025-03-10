const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  const locals = {
    title: "NodeJS Blog",
    description: "Simple Blog Created with Node.js, Express & MongoDB.",
  };

  res.render("index", locals);
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
