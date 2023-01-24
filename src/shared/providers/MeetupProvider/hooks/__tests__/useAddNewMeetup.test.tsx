import { getMeetupsHandler } from "@shared/msw";
import { renderHook } from "@testing-library/react";
import { setupServer } from "msw/node";

import { MeetupProvider } from "../../MeetupProvider";
import { useAddNewMeetup } from "../useAddNewMeetup";

const server = setupServer();

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("src/shared/providers/MeetupProvider/hooks/useAddNewMeetup", () => {
  it("works", () => {
    server.use(getMeetupsHandler({ amount: 2 }));
    const { result } = renderHook(useAddNewMeetup, {
      wrapper: MeetupProvider,
    });

    expect(result.current.error).toBeUndefined();
  });
});
