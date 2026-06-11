import { signupUser } from "./auth.service";
export const signup = async (req, res) => {
    const result = await signupUser(req.body);
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: result,
    });
};
//# sourceMappingURL=auth.controller.js.map