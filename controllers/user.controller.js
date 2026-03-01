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
    const token = await User.matchPassword(email, password);
    // console.log("token",token);
    return res.cookie("token",token).redirect("/");
  } catch (error) {
    return res.render("signin",{
      error:"Incorrect Email or Password"
    });
  }
}


function handleLogout(req,res){
  res.clearCookie('token').redirect("/");
}

module.exports = {
  handleSignUp,
  handleSignIn,
  handleLogout
};