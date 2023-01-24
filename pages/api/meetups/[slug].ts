import { MEETUPS } from "@shared/constants";
import { mongo } from "@shared/helpers";
import type { MeetupResponse, ReturnedMeetup } from "@shared/types";
import type { Request, Response } from "express";
import { ObjectId } from "mongodb";

const getMeetupHandler = async (
  req: Request<{ slug: string }>,
  res: Response<MeetupResponse | undefined>
): Promise<void> => {
  const { slug } = req.query;

  if (req.method !== "POST") {
    res.status(404).json({ message: "Method not allowed" });
    return;
  }
  const { client, collection } = await mongo<ReturnedMeetup>(MEETUPS);

  let data: ReturnedMeetup | null;

  try {
    data = await collection.findOne<ReturnedMeetup>({
      _id: new ObjectId(slug as string),
    });
  } catch (error) {
    res.status(500).json({ message: "Could not find meetup" });
    client.close();
    return;
  }
  client.close();

  if (!data) {
    res.status(500).json({ message: "Could not find meetup" });
    return;
  }

  const meetup = {
    id: data._id.toString(),
    title: data.title,
    address: data.address,
    description: data.description,
    image: data.image,
  };

  res.status(200).json({
    message: "Success!",
    data: meetup,
  });
};

export default getMeetupHandler;
