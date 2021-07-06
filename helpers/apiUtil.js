import { connectToDatabase } from './db';

export const getAllMeetups = async () => {
    let client;
    try {
        client = await connectToDatabase();
        console.log(client);
    } catch (error) {
        console.log(error);
        return;
    }
    const db = client.db();

    let data;
    try {
        data = await db
            .collection('meetups')
            .find()
            .toArray()
            .sort({ _id: -1 });
    } catch (error) {
        console.log(error);
        return;
    }

    let result;
    try {
        result = await data.json();
    } catch (error) {
        console.log(error);
        return;
    }

    client.close();

    return result;
};
