import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false, useCreateIndex:true, user: process.env.MONGO_USERNAME, pass: process.env.MONGO_PASS});
mongoose.Promise = global.Promise;

export default mongoose; 