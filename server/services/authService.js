const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const register = async ({
  name,
  email,
  password,
  idNumber,
  role,
  isApproved,
}) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  if (idNumber?.length > 13) {
    throw new Error("ID number cannot be more than 13 digits.");
  }

  const user = await User.create({
    name,
    email,
    password,
    idNumber,
    role,
    isApproved,
  });

  return {
    message: "User registered successfully",
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      idNumber: user.idNumber,
      isApproved: user.isApproved,
    },
    token: generateToken(user._id),
  };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new Error("Invalid credentials");
  }

  return {
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      idNumber: user.idNumber,
      role: user.role,
      isApproved: user.isApproved,
      booksBorrowedCount: user.booksBorrowedCount,
    },
    token: generateToken(user._id),
  };
};

module.exports = {
  register,
  login,
};
