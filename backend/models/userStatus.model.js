import mongoose from "mongoose";

const userStatusSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },
        status: {
            type: String,
            default : "available",
            enum: ["available", "busy"],
            required: true,
        }
    },
    {timestamps: true}
);

const userStatus = mongoose.model("UserStatus", userStatusSchema);
// mongo will make it users

export default userStatus;
