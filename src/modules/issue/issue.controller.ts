import type {Request,Response} from "express";

import {
createIssue,
getAllIssues,
getSingleIssue,
deleteIssue
}
from "./issue.service";

import type {AuthRequest} from "../../middlewares/auth";





export const createIssueController =
async(
req:AuthRequest,
res:Response
)=>{


const result =
await createIssue(
req.body,
req.user!.id
);



res.status(201).json({

success:true,

message:"Issue created successfully",

data:result

});


};






export const getIssuesController =
async(
req:Request,
res:Response
)=>{


const result =
await getAllIssues();



res.status(200).json({

success:true,

message:"Issues retrieved successfully",

data:result

});


};







export const getSingleIssueController =
async(
req:Request,
res:Response
)=>{


const result =
await getSingleIssue(
Number(req.params.id)
);



res.status(200).json({

success:true,

message:"Issue retrieved successfully",

data:result

});


};








export const deleteIssueController =
async(
req:AuthRequest,
res:Response
)=>{


await deleteIssue(
Number(req.params.id)
);



res.status(200).json({

success:true,

message:"Issue deleted successfully"

});


};