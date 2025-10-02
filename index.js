import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import playerRoutes from './routes/playerRoute.js';
import connectDB from './config/DB.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

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
        url: "http://localhost:3000", 
      },
    ],
  },
  apis: ["./routes/*.js"],
};

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
  res.send('Welcome to the NBA CRUD API');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Swagger docs at http://localhost:${port}/api-docs`);
});

export default app;