import type { FC } from "react";

import classes from "./Card.module.scss";

interface CardProps {
  children: JSX.Element;
}

export const Card: FC<CardProps> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};
