import { UserModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const usernameCheck = await UserModel.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await UserModel.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      email,
      username,
      password: hashedPassword,
    });
    const { password: _, ...userWithoutPassword } = user.toObject();

    return res.json({ status: true, user: userWithoutPassword });
  } catch (ex) {
    next(ex);
  }
};

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username });
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    const { password: _, ...userWithoutPassword } = user.toObject();
    return res.json({ status: true, user: userWithoutPassword });
  } catch (ex) {
    next(ex);
  }
};

const logoutUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({ msg: "User ID is required" });
    }
    const isDeleted = onlineUsers.delete(id);
    if (!isDeleted) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.status(200).json({ msg: "User successfully removed" });
  } catch (ex) {
    next(ex);
  }
};

const userProfile = async (req, res, next) => {};

export { registerUser, loginUser, logoutUser, userProfile };
