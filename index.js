import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import playerRoutes from './routes/playerRoute.js';
import connectDB from './config/DB.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NBA Players API",
      version: "1.0.0",
      description: "A simple API to manage NBA players",
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production' 
          ? `https://${process.env.VERCEL_URL}` 
          : "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.use('/api', playerRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the NBA CRUD API',
    docs: '/api-docs',
    health: 'OK'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV 
  });
});

// Vercel requires module.exports for serverless functions
export default app;

// For Vercel serverless
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Swagger docs at http://localhost:${port}/api-docs`);
  });
}