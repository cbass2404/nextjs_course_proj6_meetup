import { Fragment } from "react";
import Head from "next/head";

import { NewMeetupForm } from "@scenes/NewMeetupForm";

import type { NextPage } from "next";

const NewMeetupPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>

        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>

      <NewMeetupForm />
    </Fragment>
  );
};

export default NewMeetupPage;
