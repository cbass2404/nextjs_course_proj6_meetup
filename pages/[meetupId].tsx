import { MeetupDetail } from "@scenes/MeetupDetail";
import { useMeetup } from "@shared/providers";

const MeetupPage = (): JSX.Element => {
  const meetup = useMeetup();

  if (!meetup) {
    return <p>No matching meetup found.</p>;
  } else {
    return <MeetupDetail meetup={meetup} />;
  }
};

export default MeetupPage;
