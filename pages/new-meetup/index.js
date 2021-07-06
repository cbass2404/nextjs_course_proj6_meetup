import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const router = useRouter();

    const handleAddMeetup = async (newMeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(newMeetupData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            console.log(response.error);
            return;
        }

        router.push('/');
    };

    return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
};

export default NewMeetupPage;
