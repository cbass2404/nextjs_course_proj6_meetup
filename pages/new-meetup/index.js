import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const handleAddMeetup = async (newMeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(newMeetupData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        await response.json();
    };

    return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
};

export default NewMeetupPage;
