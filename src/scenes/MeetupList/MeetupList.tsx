import { MeetupItem } from "@scenes/MeetupItem";

import { useMeetups } from "@shared/providers";

import type { FC } from "react";

import classes from "./MeetupList.module.scss";

export const MeetupList: FC = () => {
  const { error, loading, meetups } = useMeetups();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {error && <p>{error}</p>}

      <ul className={classes.list}>
        {meetups?.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        ))}
      </ul>
    </>
  );
};
