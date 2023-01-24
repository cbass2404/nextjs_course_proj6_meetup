import { useMemo } from "react";
import { useRouter } from "next/router";

import { useMeetupContext } from "../MeetupProvider";

import type { Meetup } from "@shared/types";

export const useMeetup = (): Meetup | undefined => {
  const router = useRouter();
  const { meetupId } = router.query;

  const { meetups } = useMeetupContext();

  return useMemo(
    () => meetups.find((meetup) => meetup.id === meetupId),
    [meetups, meetupId]
  );
};
