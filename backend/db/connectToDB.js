import mongoose from "mongoose";

const connectToDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/chat-app");
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("error connecting to MongoDB", error.message)
    }
}

export default connectToDB;