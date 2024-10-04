const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { attachCookiesToResponse } = require("../utils");
const CustomError = require("../errors/index");

const register = async (req, res) => {
  const { username, email, password, role } = req.body;

  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email Already Exists");
  }

  //first registered user is an admin
  // const  isFirstAccount = (await User.countDocuments({})) === 0
  // const role = isFirstAccount ? "admin" : "user"

  const user = await User.create({ username, email, password, role });

  const tokenUser = { name: user.username, userId: user._id, role: user.role };

  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.CREATED).json({ user: tokenUser });
  // res.send('register user')
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError("Pleaser provide email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }

  const tokenUser = { name: user.username, userId: user._id, role: user.role };

  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
};

module.exports = {
  register,
  login,
  logout,
};
