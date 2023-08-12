import bcrypt from "bcryptjs";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { username, password } = await request.json();

  try {
    await connectToDB();

    const user = await User.findOne({ username });

    if (!user) {
      return new Response("Invalid credentials", { status: 401 });
    }

    // compare password and inputed password

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response("Incorrect Password", { status: 404 });
    }
    return new Response("login successful", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to login a new user", { status: 500 });
  }
};
