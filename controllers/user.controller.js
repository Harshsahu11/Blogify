const User = require("../models/user.model");

async function handleSignUp(req, res) {
  const { fullName, email, password } = req.body;

  await User.create({
    fullName,
    email,
    password,
  });

  return res.redirect("/");
}

async function handleSignIn(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.matchPassword(email, password);

    console.log("Logged in:", user);

    return res.redirect("/");
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

module.exports = {
  handleSignUp,
  handleSignIn,
};