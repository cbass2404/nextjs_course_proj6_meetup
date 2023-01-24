import { ObjectId } from "mongodb";

import type { BasicMeetup, ReturnedMeetup } from "@shared/types";

export const mockMeetup: BasicMeetup = {
  title: "First Meetup",
  image: "http://www.meetup.com/first_meetup",
  address: "123 address rd, test, st 92182",
  description: "a description goes here",
};

export const getMockMeetups = (amount: number): ReturnedMeetup[] => {
  const meetups: ReturnedMeetup[] = [];

  if (amount > 0) {
    for (let count = 0; count < amount; count++) {
      meetups.push({
        _id: new ObjectId(count),
        title: `Meetup ${count}`,
        image: `http://www.test-url.com/meetup-${count}-image`,
        address: `${count} address rd, test, st 92182`,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      });
    }
  }

  return meetups;
};
