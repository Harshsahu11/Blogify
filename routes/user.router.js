const express = require("express");
const router = express.Router();

const {
  handleSignUp,
  handleSignIn,
  handleLogout,
} = require("../controllers/user.controller");

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signup", handleSignUp);

router.post("/signin", handleSignIn);

router.get("/logout", handleLogout);

module.exports = router;
