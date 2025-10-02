import mongoose from "mongoose"

const connectDB = async () => {
    try {
        if (!process.env.DATABASE_URL) {
            throw new Error("DATABASE_URL is not defined in environment variables");
        }
        console.log("Attempting to connect to MongoDB...");

        await mongoose.connect(process.env.DATABASE_URL);
        console.log("MongoDB connected successfully");


        

    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); 
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

export default connectDB