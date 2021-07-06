import { getAllMeetups } from '../helpers/apiUtil';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
    return <MeetupList meetups={props.meetups} />;
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
