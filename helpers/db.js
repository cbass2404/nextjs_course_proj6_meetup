import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.c19f6.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
        {
            useUnifiedTopology: true,
        }
    );
    return client;
};
