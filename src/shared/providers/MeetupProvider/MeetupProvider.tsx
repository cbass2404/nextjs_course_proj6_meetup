import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { getAllMeetups, noProviderStub } from "@shared/helpers";

import type { FC, Dispatch, SetStateAction } from "react";
import type { Meetup } from "@shared/types";

interface Context {
  meetups: Meetup[];
  setMeetups: Dispatch<SetStateAction<Meetup[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: string | undefined;
  setError: Dispatch<SetStateAction<string | undefined>>;
}

interface MeetupProviderProps {
  children: JSX.Element;
}

const initialState: Context = {
  meetups: [],
  setMeetups: () => noProviderStub("MeetupProvider"),
  loading: false,
  setLoading: () => noProviderStub("MeetupProvider"),
  error: undefined,
  setError: () => noProviderStub("MeetupProvider"),
};

const context = createContext<Context>(initialState);

export const MeetupProvider: FC<MeetupProviderProps> = ({ children }) => {
  const [error, setError] = useState<string | undefined>(initialState.error);
  const [loading, setLoading] = useState<boolean>(initialState.loading);
  const [meetups, setMeetups] = useState<Meetup[]>(initialState.meetups);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    getAllMeetups()
      .then((meetups) => {
        setLoading(false);
        setMeetups(meetups);
      })
      .catch((err) => {
        const error = err as Error;
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const value: Context = useMemo(
    () => ({
      error,
      setError,
      loading,
      setLoading,
      meetups,
      setMeetups,
    }),
    [error, setError, loading, setLoading, meetups, setMeetups]
  );

  return <context.Provider value={value}>{children}</context.Provider>;
};

export const MockMeetupProvider: FC<{
  children: JSX.Element;
  options?: Partial<Context>;
}> = ({ children, options }) => {
  const value: Context = useMemo(
    () => ({
      ...initialState,
      ...options,
    }),
    [options]
  );

  return <context.Provider value={value}>{children}</context.Provider>;
};

export const useMeetupContext = (): Context => useContext(context);
