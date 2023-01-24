import { rest } from "msw";

import { GetMeetupsReturnTypeOptions } from "@shared/constants";
import { getMockMeetups } from "@shared/mockData";

import type { DefaultBodyType, MockedRequest, RestHandler } from "msw";
import type { ReturnedMeetup } from "@shared/types";

type getMeetupsHandlerArgs = {
  amount: number;
  returnType?: GetMeetupsReturnTypeOptions;
};

export const getMeetupsHandler = ({
  amount,
  returnType,
}: getMeetupsHandlerArgs): RestHandler<MockedRequest<DefaultBodyType>> =>
  rest.get<ReturnedMeetup[]>(
    "http://test.meetup.com/api/meetups",
    (_req, res, ctx) => {
      let data: ReturnedMeetup[] = [];

      if (amount > 0) {
        data = getMockMeetups(amount);
      }

      switch (returnType) {
        case GetMeetupsReturnTypeOptions.NetworkError:
          return res(ctx.status(400), ctx.json({ message: "Network error" }));
        default:
          return res(
            ctx.status(200, "Success!"),
            ctx.json({
              data,
            })
          );
      }
    }
  );
