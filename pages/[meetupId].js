import { connectToDatabase } from '../helpers/db';
import { getMeetupDetails } from '../helpers/apiUtil';

import MeetupDetail from '../components/meetups/MeetupDetail';

const MeetupPage = (props) => {
    return <MeetupDetail meetup={props.meetup} />;
};

export const getStaticProps = async (context) => {
    const meetupId = await context.params.meetupId;
    const meetup = await getMeetupDetails(meetupId);

    return {
        props: {
            meetup,
        },
    };
};

export const getStaticPaths = async () => {
    const client = await connectToDatabase();
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    const paths = meetups.map((meetup) => ({
        params: { meetupId: meetup._id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export default MeetupPage;
