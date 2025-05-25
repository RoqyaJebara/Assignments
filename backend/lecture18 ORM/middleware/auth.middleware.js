import User from "../models/user.model.js";  
import jwt from "jsonwebtoken";

export const authenticate= async (req, res, next) => {
  try {
    const authHeader= req.headers["authorization"];
const token= authHeader.split(" ")[1];

    if (!token) throw new Error("No token provided");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findByPK(decoded.id,{
      attributes:['id', 'name', 'email','role']});  
    if (!user) throw new Error("User not found");
    req.user = user;
    next();
   
  } catch (error) {
error.statuscode=401;
    next();
  }
}

// export const authorize = (roles=[]) => {    
//     return (req, res, next) => {
//         if(roles.length && !roles.includes(req.user.role)){
//             const error = new Error("unautharized access");
//         // if (!req.user) {
//         // return res.status(401).json({ message: "Unauthorized" });
//         // }
//         // if (roles.length && !roles.includes(req.user.role)) {
//         // return res.status(403).json({ message: "Forbidden" });
//         // }
//         next();
//     };
//     }  }  
