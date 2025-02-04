import { Request, Response } from "express";
import { createUser, findUserByEmail } from "../services/userServices";
import { generateToken } from "../utils/auth";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await createUser(req.body);
    const token = generateToken(user._id.toString(), user.role);
    res.status(201).json({ token });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user || !(await user.comparePassword(password))) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }
    const token = generateToken(user._id.toString(), user.role);
    res.json({ token });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};
