import { MEETUPS } from "@shared/constants";
import { mongo } from "@shared/helpers/mongo";

import type { Request, Response } from "express";
import type { AllMeetupsResponse, ReturnedMeetup } from "@shared/types";

const getMeetupsHandler = async (
  req: Request,
  res: Response<AllMeetupsResponse>
): Promise<void> => {
  if (req.method !== "GET") {
    res.status(404).json({ message: "Method not allowed" });
    return;
  }
  const { client, collection } = await mongo<ReturnedMeetup>(MEETUPS);

  let data: ReturnedMeetup[];

  try {
    data = await collection.find().sort({ _id: -1 }).toArray();
  } catch (error) {
    res.status(500).json({ message: "Could not find meetups" });
    client.close();
    return;
  }
  client.close();

  res.status(200).json({
    message: "Success!",
    data: data.map((meetup) => ({
      id: meetup._id.toString(),
      title: meetup.title,
      image: meetup.image,
      address: meetup.address,
      description: meetup.description,
    })),
  });
};

export default getMeetupsHandler;
