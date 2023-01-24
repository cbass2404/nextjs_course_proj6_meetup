import type { BasicMeetup, Meetup } from "@shared/types";

export const addNewMeetup = async (
  newMeetupData: BasicMeetup
): Promise<Meetup> => {
  try {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { data, error } = await response.json();

    if (!response.ok) {
      throw error;
    }

    return Promise.resolve(data.data);
  } catch (err) {
    const error = err as Error;

    return Promise.reject(error);
  }
};

export const getAllMeetups = async (): Promise<Meetup[]> => {
  const response = await fetch("/api/meetups", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data, message } = await response.json();

  if (!response.ok) {
    return Promise.reject(new Error(message));
  }

  return Promise.resolve(data);
};
