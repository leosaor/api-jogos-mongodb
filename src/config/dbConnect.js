import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/games");

let db = mongoose.connection;

export default db;