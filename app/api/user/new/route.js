import bcrypt from 'bcryptjs'
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const {username, password} = await request.json();

    try {
        await connectToDB();

        const userExist = await User.findOne({username})

        if (userExist) {
            return new Response("Username already exist", { status: 401});
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({username, password: hashedPassword})

        await newUser.save()

        return new Response("User created successfully", { status: 200 });
    } catch (error) {
        console.error(error)
        return new Response("Failed to create a new user", { status: 500 });

        
    }
} 