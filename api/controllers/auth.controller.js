import User from "../models/user.model.js";
import bcryptjs from  'bcryptjs';
import { errorHandler } from "../utils/error.js";
import  jwt  from "jsonwebtoken";

export const signup = async(req,res,next)=>{
const  {username,email,password} = req.body;
const hashpassword =  bcryptjs.hashSync(password,10)
const newUser = new User({username,email,password:hashpassword});
try{

    await newUser.save()
    res.status(201).json("user created succsessfully")
}catch(error){
next(error);
}
};

export  const signin =async (req,res,next)=> {
const  {email,password} = req.body;
try {
    

const  validuser = await User.findOne({email});
if(!validuser)  return next(errorHandler(404,'user not found '));
const Validpassword = bcryptjs.compareSync(password,validuser.password);
if(!Validpassword)return next(errorHandler(404,'wrong credensial '));
const token = jwt.sign({_id : validuser._id},process.env.JWTSECRET);
const {password: pass,...rest} = validuser._doc;
res.cookie("accses token",token,{httpOnly:true}).status(200).json(rest)
}
catch (error) {
    next(error);
}
}
