// import mongoose from "mongoose";

// const bookSchema = mongoose.Schema(
//   {
//   title: {
//     type:String,
//     required: true,
//   },
//   author: {
//     type:String,
//     required: true,
//   },
//   publishedYear: {
//     type:String,
//     required: true,
//   },
// },
//   {
//     timestamps: true,
//   },
// )

// export const Book = mongoose.model('Cat', bookSchema);

import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
  },   {
           timestamps: true,
        },
);

const Book = mongoose.model('Book', bookSchema);

export default Book;