import { connectToDatabase } from '../../helpers/db';

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(404).json({ message: 'Method not allowed' });
        return;
    }
    const newMeetupData = req.body;

    let client;
    try {
        client = await connectToDatabase();
    } catch (error) {
        res.status(500).json({ message: 'Could not connect to database...' });
        return;
    }

    const db = client.db().collection('meetups');

    let data;
    try {
        data = await db.insertOne(newMeetupData);
    } catch (error) {
        res.status(500).json({ message: 'Could not create new meetup' });
        client.close();
        return;
    }

    newMeetupData._id = data.insertedId;

    const result = {
        id: newMeetupData._id,
        title: newMeetupData.title,
        image: newMeetupData.image,
        address: newMeetupData.address,
        description: newMeetupData.description,
    };

    res.status(200).json({ message: 'Meetup created', data: result });

    client.close();
};

export default handler;
