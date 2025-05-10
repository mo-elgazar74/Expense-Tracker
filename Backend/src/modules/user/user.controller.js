import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // You forgot to import this in your snippet!
import { User } from "../../../databases/models/user.model.js";

// Signup
const signUp = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already used, please login" });
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const userData = { ...req.body, password: hashedPassword };

    const user = await User.create(userData);

    res.status(201).json({ message: "Account created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Login
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const token = jwt.sign(
      { role: user.role, userId: user._id, name: user.name },
      "elgazar",
      { expiresIn: "7d" }
    );

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { signUp, login };
