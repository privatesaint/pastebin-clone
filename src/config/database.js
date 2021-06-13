import mongoose from "mongoose";
import dotenv from "dotenv";

// import env variables
dotenv.config();

const connection = () => {
  return mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

export default connection;
