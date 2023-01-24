import { Layout } from "@shared/components/Layout";
import { MeetupProvider } from "@shared/providers";
import type { AppProps } from "next/app";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <MeetupProvider>
        <Component {...pageProps} />
      </MeetupProvider>
    </Layout>
  );
};

export default MyApp;
