import User from "../models/user.model.js";
import {
  registerSchema,
  loginSchema,
  changePasswordSchema,
} from "../utils/validation.js";

const AutherController = {
  async register(req, res) {
    try {
      const { error, value } = registerSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);
      const { name, email, password } = value;
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) throw new Error("Email already exists");
      const newUser = await User.create({ name, email, password });
      const token = User.generateToken(newUser.id);

      res.status(201).json({
        success: true,
        token: token,
        user: { id: newUser.id, name: newUser.name, email: newUser.email },
      });
    } catch (error) {}
  },
  async login(req, res, next) {
    try {
      const { error, value } = loginSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);
      const { email, password } = value;

      const user = await User.findOne({ where: { email } });
      if (!user) throw new Error("Invalid credentials");
      const isMatch = await user.verifyPassword(password);
      if (!isMatch) throw new Error("Invalid password");
      const token = User.generateToken(user.id);

      res.status(200).json({
        success: true,
        token: token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    } catch (error) {
      next(error);
    }
  },

  //     async changePassword(req, res) {
  // try {
  //    const { error,value } = changePasswordSchema.validate(req.body);
  //     if (error) throw new Error(error.details[0].message);
  //     const user=await UserModel.findByEmail(req.user.email);
  //     if (!user) throw new Error("User not found");
  //     const isMatch = await UserModel.verifyPassword(
  //       currentPassword,
  //       user.password
  //     );
  //     if (!isMatch) throw new Error("Invalid current password");
  //     await UserModel.updatePassword(user.id, newPassword);

  //     res.json({
  //       success: true,
  //       message: "Password changed successfully",
  //     });

  // } catch (error) {
  //   next(error);
  // }

  async getMe(req, res) {
    try {
      const user = await User.findByPk(req.user.id, {
        attributes: ["id", "name", "email", "role"],
      });
      if (!user) throw new Error("User not found");
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      next(error);
    }
  },
};
