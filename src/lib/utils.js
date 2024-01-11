import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
    try {
        if(connection.isConnected){
            // We Are Creating If Block To Avoid DB Connection Check For Each Data Fetching
            console.log("Using Connected DB")
            return;
        }
        const db = await mongoose.connect(process.env.MONGO)
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}