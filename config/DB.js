import mongoose from "mongoose"

const connectDB = async () => {
    try {
        // Check if DATABASE_URL is defined
        if (!process.env.DATABASE_URL) {
            throw new Error("DATABASE_URL is not defined in environment variables");
        }

        console.log("Attempting to connect to MongoDB...");
        
        await mongoose.connect(process.env.DATABASE_URL);
        
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        // Don't exit process in production - Vercel will handle it
        if (process.env.NODE_ENV === 'production') {
            console.log("Continuing without MongoDB connection");
        } else {
            process.exit(1);
        }
    }
}

export default connectDB;