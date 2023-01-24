import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";

import { useMeetupContext } from "../MeetupProvider";

import type { BasicMeetup } from "@shared/types";
import { addNewMeetup } from "@shared/helpers/fetchHandlers";

interface UseAddNewMeetupReturn {
  error: string | undefined;
  loading: boolean;
  handleAddMeetup: (newMeetupData: BasicMeetup) => Promise<void>;
}

export const useAddNewMeetup = (): UseAddNewMeetupReturn => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const { setMeetups } = useMeetupContext();

  const handleAddMeetup = useCallback(
    async (newMeetupData: BasicMeetup): Promise<void> => {
      setLoading(true);
      setError(undefined);

      await addNewMeetup(newMeetupData)
        .then((meetup) => {
          setMeetups((prevState) => [meetup, ...prevState]);
          setLoading(false);
          router.push("/");
        })
        .catch((err) => {
          const _error = err as Error;
          setError(_error.message);
          setLoading(false);
        });
    },
    [router, setMeetups, setLoading, setError]
  );

  return useMemo(
    () => ({ error, loading, handleAddMeetup }),
    [error, loading, handleAddMeetup]
  );
};
