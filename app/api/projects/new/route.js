import Project from "@models/project";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {

    const { name, github, hostedLink, image, category, description } = await request.json();

    try {
        await connectToDB();
        const newProject = new Project({ name, github, hostedLink, image, category, description});

        await newProject.save();

        console.log(newProject)

        return new Response(JSON.stringify(newProject), { status: 201 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
