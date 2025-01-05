import { UserModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const jwtSecret = process.env.JWT_SECRET;
    const bcryptSalt = bcrypt.genSaltSync(10);

    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);

    const createdUser = await UserModel.create({
      username: username,
      password: hashedPassword,
    });

    jwt.sign(
      { userId: createdUser._id, username },
      jwtSecret,
      {},
      (err, token) => {
        if (err) throw err;

        res
          .cookie("token", token, { sameSite: "none", secure: true })
          .status(201)
          .json({
            id: createdUser._id,
            username: createdUser.username,
            token,
          });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {};

const logoutUser = async (req, res) => {};

export { registerUser, loginUser, logoutUser };
