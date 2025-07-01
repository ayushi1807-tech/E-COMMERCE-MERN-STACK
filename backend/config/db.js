import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connection successfully");
    } catch (error) {
        console.error("Database connection error:", error); // Show the real error
    }
}

export default connectDb;