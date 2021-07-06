import MeetupDetail from '../../components/meetups/MeetupDetail';

import { DUMMY_MEETUPS } from '../index';

const MeetupPage = (props) => {
    return <MeetupDetail meetup={DUMMY_MEETUPS[0]} />;
};

export default MeetupPage;
