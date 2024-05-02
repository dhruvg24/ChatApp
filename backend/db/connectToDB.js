import mongoose from "mongoose";

const connectToDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://dg24:hqassignment@cluster0.vec8iy3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("error connecting to MongoDB", error.message)
    }
}

export default connectToDB;