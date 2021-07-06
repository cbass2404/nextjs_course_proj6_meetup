import { MongoClient } from 'mongodb';

export const mongoConnet = async () => {
    const client = await MongoClient(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.c19f6.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
        {
            useUnifiedTopology: true,
        }
    );

    return client;
};
