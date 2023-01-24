import MainNavigation from "@scenes/MainNavigation/MainNavigation";

import type { FC } from "react";

import classes from "./Layout.module.scss";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <MainNavigation />

      <main className={classes.main}>{children}</main>
    </div>
  );
};
