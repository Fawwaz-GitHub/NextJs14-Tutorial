import { Post, User } from "./models";
import { connectToDB } from "./utils"
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
    noStore();
    try {
        connectToDB();
        const posts = await Post.find();
        return posts
    } catch (error) {
        console.log(error)
        throw new Error("Failed To Fetch Posts");
    }
}

export const getPost = async (slug) => {
    noStore();
    try {
        connectToDB();
        const post = await Post.findOne({ slug: slug});
        return post
    } catch (error) {
        console.log(error)
        throw new Error("Failed To Fetch Post");
    }
}

export const getUsers = async () => {
    noStore();
    try {
        connectToDB();
        const users = await User.find();
        return users
    } catch (error) {
        console.log(error)
        throw new Error("Failed To Fetch Users");
    }
}

export const getUser = async (id) => {
    noStore();
    try {
        connectToDB();
        const user = await User.findById(id);
        return user
    } catch (error) {
        console.log(error)
        throw new Error("Failed To Fetch User");
    }
}