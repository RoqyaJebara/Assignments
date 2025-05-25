import UserModel from "../models/userModel.js";
import { registerSchema ,loginSchema,changePasswordSchema} from "../utils/validation.js";

const AuthController = {
  async register(req, res) {
    try {
      const { error, value } = registerSchema.validate(req.body);
      if (error) throw new Error(error.details[0].message);
      const { name, email, password } = value;
      const existingUser = await UserModel.findByEmail({ email });
      if (existingUser) throw new Error("Email already exists");
      const newUser = await UserModel.create({ name, email, password });
      const token = UserModel.generateToken(newUser.id);
      res
        .status(201)
        .json({
          success: true,
          token: token,
          user: { id: newUser.id, name: newUser.name, email: newUser.email },
        });
    } catch (error) {
      next(error); //go to middleware error oauth
    }
  },

  async login(req, res,next) {
    try{const { error, value } = loginSchema.validate(req.body);
    if (error) throw new Error(error.details[0].message);
    const { email, password } = value;

    const user = await UserModel.findByEmail({ email });
    if (!user) throw new Error("Invalid credentials");
    const isMatch = await UserModel.verifyPassword(
      password,
      user.password
    );
    if (!isMatch) throw new Error("Invalid password");
//  const token = UserModel.generateToken(user.id);

 req.session.userId = user.id; // Store user ID in session
 req.session.authenticated = true; // Set authenticated flag

 const token = UserModel.generateToken(user.id);
    // Generate JWT token

    res.cookie("token", token, {
      httpOnly: true, // Prevent client-side access to the cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      sameSite: "strict", // Prevent CSRF attacks
    });



    res.status(200).json({
      success: true,
      token: token,
      user: { id: user.id, name: user.name, email: user.email },
    });}catch(error){}
    
  },

  async changePassword(req, res) {
try {
   const { error,value } = changePasswordSchema.validate(req.body);
    if (error) throw new Error(error.details[0].message);
    const user=await UserModel.findByEmail(req.user.email);
    if (!user) throw new Error("User not found");
    const isMatch = await UserModel.verifyPassword(
      currentPassword,
      user.password
    );
    if (!isMatch) throw new Error("Invalid current password");
    await UserModel.updatePassword(user.id, newPassword);

    res.json({
      success: true,
      message: "Password changed successfully",
    });
   
} catch (error) {
  next(error);
}
   
  },
  async getCurrentLoginInfo(req, res) {
    try{
const user = await UserModel.findById(req.user.id);
    if (!user) throw new Error("User not found");
    res.json({
      success: true,
      user
    });
    }catch (error) {
      next(error);
    }},


async logout{req,res,next} {
  try {
    req.session.destroy((err) => {
      if (err)  throw err;  
    });
     res.clearCookie("token"); // Clear the cookie
     res.clearCookie("connected.sid"); // Clear the cookie
      res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
  }

};
export default AuthController;
