import Project from "@models/project";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const project = await Project.find({})

        return new Response(JSON.stringify(project), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all project", { status: 500 })
    }
}