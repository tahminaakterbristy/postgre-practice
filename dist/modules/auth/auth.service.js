import bcrypt from "bcrypt";
import { pool } from "../../config/db";
export const signupUser = async (payload) => {
    const { name, email, password, role } = payload;
    const userExists = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (userExists.rows.length) {
        throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT_ROUNDS));
    const result = await pool.query(`INSERT INTO users(name,email,password,role)
     VALUES($1,$2,$3,$4)
     RETURNING id,name,email,role,created_at,updated_at`, [
        name,
        email,
        hashedPassword,
        role || "contributor"
    ]);
    return result.rows[0];
};
//# sourceMappingURL=auth.service.js.map