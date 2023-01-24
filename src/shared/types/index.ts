export interface BasicMeetup {
  title: string;
  image: string;
  address: string;
  description: string;
}

export interface Meetup extends BasicMeetup {
  id: string;
}

export interface ReturnedMeetup extends BasicMeetup {
  _id: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface Response {
  message: string;
}

export interface MeetupResponse extends Response {
  data?: Meetup;
}

export interface AllMeetupsResponse extends Response {
  data?: Meetup[];
}
