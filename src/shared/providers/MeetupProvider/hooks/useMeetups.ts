import { useMeetupContext } from "../MeetupProvider";

import type { Meetup } from "@shared/types";

interface UseMeetupsReturn {
  error: string | undefined;
  loading: boolean;
  meetups: Meetup[];
}

export const useMeetups = (): UseMeetupsReturn => {
  const { error, loading, meetups } = useMeetupContext();

  return { error, loading, meetups };
};
