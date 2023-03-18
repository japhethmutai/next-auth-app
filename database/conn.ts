import mongoose from 'mongoose';

const { MONGODB_URL = '' } = process.env;

const connectMongo = async() => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URL);

        if (connection.readyState == 1) {
            return Promise.resolve(true);
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

export default connectMongo;