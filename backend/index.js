import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import booksRoutes from "./routes/booksRoute.js";
 

const app = express();

// Middleware for parsing request body(in json format)
app.use(express.json());

// Middleware for enabling CORS
// option 1: allow all origins with default of cors(*)
// app.use(cors());

// option 2: allow custom origins
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN stack tutorial");
});


app.use('/books', booksRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");

    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// import express from 'express';
// import mongoose from 'mongoose';
// import { PORT, mongoDBURL } from './config.js'; // Ensure the correct import path
// import Book from './models/bookModels.js'; // Ensure the correct import path

// const app = express();

// app.use(express.json());

// app.get('/', (request, response) => {
//     console.log(request);
//     return response.status(200).send('Hello World');
// });

// app.post('/books', async (request, response) => {
//     try {
//         const newBook = {
//             title: request.body.title,
//             author: request.body.author,
//             publishYear: request.body.publishYear,
//         };
//         const book = await Book.create(newBook);
//         return response.status(201).send(book);
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({
//             message: 'Error while saving book',
//         });
//     }
// });

// mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('App connected to database');

//         app.listen(PORT, () => {
//             console.log(`App is listening to port: ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error('Database connection error:', error);
//     });
