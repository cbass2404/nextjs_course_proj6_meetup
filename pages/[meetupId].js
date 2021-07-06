import { Fragment } from 'react';
import Head from 'next/head';

import { connectToDatabase } from '../helpers/db';
import { getMeetupDetails } from '../helpers/apiUtil';

import MeetupDetail from '../components/meetups/MeetupDetail';

const MeetupPage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.meetup.title}</title>
                <meta name="description" content={props.meetup.description} />
            </Head>
            <MeetupDetail meetup={props.meetup} />;
        </Fragment>
    );
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
    const meetups = await meetupsCollection
        .find({}, { projection: { _id: 1 } })
        .toArray();

    client.close();

    const paths = meetups.map((meetup) => ({
        params: { meetupId: meetup._id.toString() },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
};

export default MeetupPage;
