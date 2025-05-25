import UserModel from "../models/userModel.js";  
import jwt from "jsonwebtoken";

export const authenticate= async (req, res, next) => {


  try {
if(req.session.authenticated&&req.session.userId){
    const user = await UserModel.findById(decoded.id);
    if (!user) throw new Error("User not found");
    if(user){
      req.user=user;
      return next();
    }

}
//     const authHeader= req.headers["authorization"];
// const token= authHeader.split(" ")[1];

const token = req.cookies.token ;

    if (!token) throw new Error("No token provided");
   
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) throw new Error("User not found");
   
   //
   //
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
