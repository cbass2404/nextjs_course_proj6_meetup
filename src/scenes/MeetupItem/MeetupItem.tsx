import Link from "next/link";

import { Card } from "@shared/components/Card";

import type { FC } from "react";

import classes from "./MeetupItem.module.scss";

interface MeetupItemArgs {
  id: string;
  title: string;
  image: string;
  address: string;
}

export const MeetupItem: FC<MeetupItemArgs> = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
          </div>
          <div className={classes.actions}>
            <Link href={`/${props.id}`}>
              <button>Show Details</button>
            </Link>
          </div>
        </>
      </Card>
    </li>
  );
};
