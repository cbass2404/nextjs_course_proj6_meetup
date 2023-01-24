import type { FC } from "react";
import type { Meetup } from "@shared/types";

import classes from "./MeetupDetail.module.scss";

interface MeetupDetailProps {
  meetup: Meetup;
}

export const MeetupDetail: FC<MeetupDetailProps> = ({ meetup }) => {
  const { image, title, address, description } = meetup;

  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />

      <h1>{title}</h1>

      <address>{address}</address>

      <p>{description}</p>
    </section>
  );
};
