import { MEETUPS } from "@shared/constants";
import { mongo } from "@shared/helpers/mongo";

import type { InsertOneResult } from "mongodb";
import type { Request, Response } from "express";
import type { Meetup, MeetupResponse, ReturnedMeetup } from "@shared/types";

const newMeetupHandler = async (
  req: Request,
  res: Response<MeetupResponse>
): Promise<void> => {
  if (req.method !== "POST") {
    res.status(404).json({ message: "Method not allowed" });
    return;
  }
  const newMeetupData: ReturnedMeetup = req.body;

  const { client, collection } = await mongo<ReturnedMeetup>(MEETUPS);

  let data: InsertOneResult<ReturnedMeetup>;

  try {
    data = await collection.insertOne(newMeetupData);
  } catch (error) {
    res.status(500).json({ message: "Could not create new meetup" });
    client.close();
    return;
  }
  client.close();

  newMeetupData._id = data.insertedId;

  const result: Meetup = {
    id: newMeetupData._id.toString(),
    title: newMeetupData.title,
    image: newMeetupData.image,
    address: newMeetupData.address,
    description: newMeetupData.description,
  };

  res.status(200).json({ message: "Meetup created", data: result });
};

export default newMeetupHandler;
