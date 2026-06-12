import type {Request,Response} from "express";

import {
 signupUser,
 loginUser
}
from "./auth.service";


export const signup = async(
req:Request,
res:Response
)=>{

const result =
await signupUser(req.body);


res.status(201).json({

success:true,

message:"User registered successfully",

data:result

});


};



export const login = async(
req:Request,
res:Response
)=>{


const result =
await loginUser(req.body);



res.status(200).json({

success:true,

message:"Login successful",

data:result

});


};