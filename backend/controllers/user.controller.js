import User from "../models/user.model.js"
import UserStatusModel from "../models/userStatus.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id
        // this is the current user viewing the sidebar
        // now get all the users except the current viewing user
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password")
        return res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export const getUserStatus = async (req, res) => {
    try {
        const loggerInUserId = req.user._id
        const status = await UserStatusModel.findOne({"userId": loggerInUserId}).select('status');
        console.log(status)
        return res.status(201).json({status: status});
    } catch (err) {
        console.log("Error inside getUserStatus", err);
    }
}

export const updateUserStatus = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        console.log(req.body.status);
        UserStatusModel.findOneAndUpdate(
            {userId: loggedInUserId},
            {status: req.body.status},
            {new : true}
        ).then(updatedUserStatus => {
            if (updatedUserStatus) {
                console.log("User status updated:", updatedUserStatus);
                res.status(200).json({code: "1001", message: "User status updated successfully"});
            } else {
                console.log("User status not found for user ID:", loggedInUserId);
                res.status(402).json({code: "2001", message: "User status not found"});
            }
        })
    } catch (err) {
        console.error("Error in updateUserStatus: ", err.message)
        res.status(500).json({code: "3001", error: "Internal server error"})
    }
}