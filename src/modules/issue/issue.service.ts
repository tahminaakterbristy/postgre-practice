import { pool } from "../../config/db";


export const createIssue = async(
payload:any,
userId:number
)=>{

const {
title,
description,
type
}=payload;


const result =
await pool.query(
`
INSERT INTO issues(
title,
description,
type,
reporter_id
)
VALUES($1,$2,$3,$4)

RETURNING *
`,
[
title,
description,
type,
userId
]
);


return result.rows[0];

};





export const getAllIssues = async()=>{


const result =
await pool.query(
`
SELECT * FROM issues
ORDER BY created_at DESC
`
);


return result.rows;

};





export const getSingleIssue = async(id:number)=>{


const result =
await pool.query(
`
SELECT * FROM issues
WHERE id=$1
`,
[id]
);


return result.rows[0];

};





export const deleteIssue = async(id:number)=>{


await pool.query(
`
DELETE FROM issues
WHERE id=$1
`,
[id]
);


return true;

};

export const updateIssue = async(
id:number,
payload:any
)=>{


const {
title,
description,
type,
status
}=payload;


const result =
await pool.query(
`
UPDATE issues

SET
title=$1,
description=$2,
type=$3,
status=$4,
updated_at=NOW()

WHERE id=$5

RETURNING *
`,
[
title,
description,
type,
status,
id
]

);


return result.rows[0];

};