import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const handleAddMeetup = (newMeetupData) => {
        console.log(newMeetupData);
    };

    return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
};

export default NewMeetupPage;
