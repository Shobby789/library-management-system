const User = require("../models/User");
const BorrowRequests = require("../models/borrowRequests");

const getProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");
  return user;
};

const getUsers = async () => {
  const users = await User.find().select("-password");
  return users;
};

const updateUserRole = async (userId, role) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { role: role },
    { new: true }
  ).select("-password");
  return user;
};

const approveUserProfile = async (userId, isApproved) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { isApproved },
    { new: true }
  ).select("-password");
  return user;
};

module.exports = {
  getProfile,
  getUsers,
  updateUserRole,
  approveUserProfile,
};
