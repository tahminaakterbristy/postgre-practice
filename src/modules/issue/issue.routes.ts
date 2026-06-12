import {Router} from "express";

import {
createIssueController,
getIssuesController,
getSingleIssueController,
deleteIssueController
}
from "./issue.controller";


import {auth} from "../../middlewares/auth";

import {authorize}
from "../../middlewares/authorize";



const router=Router();



router.post(
"/",
auth,
createIssueController
);



router.get(
"/",
getIssuesController
);



router.get(
"/:id",
getSingleIssueController
);



router.delete(
"/:id",
auth,
authorize("maintainer"),
deleteIssueController
);



export default router;