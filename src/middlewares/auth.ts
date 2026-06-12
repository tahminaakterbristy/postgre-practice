import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


export interface AuthRequest extends Request {
  user?: {
    id:number;
    name:string;
    role:string;
  };
}



export const auth = (
 req:AuthRequest,
 res:Response,
 next:NextFunction
)=>{

 try{

 const token =
 req.headers.authorization;


 if(!token){
   return res.status(401).json({
    success:false,
    message:"Token missing"
   });
 }



 const decoded =
 jwt.verify(
  token,
  process.env.JWT_SECRET as string
 );


 req.user = decoded as any;


 next();



 }catch(error){

 return res.status(401).json({
  success:false,
  message:"Invalid token"
 });

 }


};