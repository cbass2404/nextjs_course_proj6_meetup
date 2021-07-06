import { ObjectId } from 'mongodb';
import { connectToDatabase } from './db';

export const getAllMeetups = async () => {
    const client = await connectToDatabase();

    const db = client.db();

    const data = await db
        .collection('meetups')
        .find()
        .sort({ _id: -1 })
        .toArray();

    client.close();

    const result = data.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
    }));

    return result;
};

export const getMeetupDetails = async (meetupId) => {
    let client;
    try {
        client = await connectToDatabase();
    } catch (error) {
        throw new Error('Could not connect to database');
    }

    const db = client.db();

    let data;
    try {
        data = await db
            .collection('meetups')
            .findOne({ _id: ObjectId(meetupId) });
    } catch (error) {
        throw new Error('Could not find meetup details');
    }

    client.close();

    const meetup = {
        id: data._id.toString(),
        title: data.title,
        address: data.address,
        description: data.description,
        image: data.image,
    };

    return meetup;
};
