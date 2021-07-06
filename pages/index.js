import { Fragment } from 'react';
import Head from 'next/head';

import { getAllMeetups } from '../helpers/apiUtil';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="Browse a huge list of highly active React meetups!"
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
};

export const getStaticProps = async () => {
    const meetups = await getAllMeetups();

    if (!meetups) {
        return {
            props: {},
        };
    }

    return {
        props: {
            meetups,
        },
        revalidate: 1,
    };
};

export default HomePage;
