import { runSeeder } from "./seed.model.js";

export const seeder = async (_req, res) => {
    try {
        await runSeeder();
        return res.json({
            message: "Seed success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Seed failed",
        });
    }
};