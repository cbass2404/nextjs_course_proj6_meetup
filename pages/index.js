import { getAllMeetups } from '../helpers/apiUtil';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = ({ meetups }) => {
    return <MeetupList meetups={meetups} />;
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
        revalidate: 60,
    };
};

export default HomePage;
