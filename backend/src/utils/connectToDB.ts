import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URL = process.env.DATABASE;
if (!process.env.DATABASE)
  throw new Error('There is no token for database connection');

const connectToDB = () => {
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
  return connect(MONGODB_URL, options);
};
export default connectToDB;