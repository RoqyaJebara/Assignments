import Joi from "joi";
//validation

export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  //max the same less or equal to DB
  //block chain methods
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,}) ")
    )
    .message(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required(),
  newPassword: Joi.string()
    .min(8)
    .pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,}) ")
    )
    .invalid(Joi.ref("currentPassword"))
    .required()
    .message({
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      "any.invalid": "New password must be different from the current password",
    }),
});
//invalid to must no the same of old
