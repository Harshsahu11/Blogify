const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { createToken } = require("../services/authentication");


async function handleSignUp(req, res) {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render("signup", {
        error: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.redirect("/signin");
  } catch (error) {
    return res.render("signup", {
      error: "Something went wrong",
    });
  }
}


async function handleSignIn(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.render("signin", {
        error: "Invalid Email or Password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render("signin", {
        error: "Invalid Email or Password",
      });
    }

    const token = createToken(user);

    return res
      .cookie("token", token, { httpOnly: true })
      .redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Something went wrong",
    });
  }
}


function handleLogout(req, res) {
  return res.clearCookie("token").redirect("/");
}

module.exports = {
  handleSignUp,
  handleSignIn,
  handleLogout,
};