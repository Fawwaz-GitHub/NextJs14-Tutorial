import { Post } from "@/lib/models"
import { connectToDB } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    try {
        connectToDB()
        const posts = await Post.find()
        return NextResponse.json(posts)
    } catch (error) {
        console.log(error)
        return NextResponse.error("Couldn't Get Posts")
    }
}