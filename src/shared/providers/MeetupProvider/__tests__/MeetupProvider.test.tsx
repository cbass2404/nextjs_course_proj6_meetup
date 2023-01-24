import { renderHook, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";

import { MeetupProvider, useMeetupContext } from "../MeetupProvider";
import { getMeetupsHandler } from "@shared/msw";
import { GetMeetupsReturnTypeOptions } from "@shared/constants";

const server = setupServer();

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("src/shared/providers/MeetupProvider", () => {
  it("works", async () => {
    server.use(getMeetupsHandler({ amount: 2 }));

    const { result } = renderHook(useMeetupContext, {
      wrapper: MeetupProvider,
    });

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    expect(result.current.meetups).toHaveLength(0);

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });

    expect(result.current.meetups).toHaveLength(2);
    expect(result.current.error).toBeUndefined();
  });

  it("handles error", async () => {
    server.use(
      getMeetupsHandler({
        amount: 0,
        returnType: GetMeetupsReturnTypeOptions.NetworkError,
      })
    );

    const { result } = renderHook(useMeetupContext, {
      wrapper: MeetupProvider,
    });

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    expect(result.current.meetups).toHaveLength(0);

    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });

    expect(result.current.error).toBe("Network error");
    expect(result.current.meetups).toHaveLength(0);
  });
});
