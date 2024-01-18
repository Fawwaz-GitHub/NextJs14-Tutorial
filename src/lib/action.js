"use server";

import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcryptjs"

export const handleGithubLogin = async () => {
    "use server"
    await signIn("github");
    
};
  
export const handleLogout = async () => {
    await signOut();
};

export const register = async (previousState, formData) => {
    const { username, email, password, passwordRepeat } = Object.fromEntries(formData);

    if(password !== passwordRepeat) { return { error: "Password Do Not Match"} }

    const user = await User.findOne({ username });

    if(user) { return { error: "User Already Exists"} }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt); 

    try {
        connectToDB();
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        await newUser.save();
        console.log("Saved To Db")
        return { success: true }
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong"}
    }
}

export const login = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials", {username, password})
    } catch (error) {
        console.log(error)
        if(error.message.includes("CredentialsSignin")){
            return { error: "Invalid Username Or Password!"}
        }
        throw error;
    }
}