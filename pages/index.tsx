import { Fragment } from "react";
import Head from "next/head";

import { MeetupList } from "@scenes/MeetupList";

import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>

      <MeetupList />
    </Fragment>
  );
};

export default HomePage;
