import MeetupList from '../components/meetups/MeetupList';

export const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg/1024px-Palacio_CEC%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_91-93_HDR.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup',
    },
    {
        id: 'm2',
        title: 'second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Tempietto_del_Bramante_Vorderseite.jpg/800px-Tempietto_del_Bramante_Vorderseite.jpg',
        address: 'Some address 15, 12345 Another City',
        description: 'This is a second meetup',
    },
];

const HomePage = () => {
    return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
