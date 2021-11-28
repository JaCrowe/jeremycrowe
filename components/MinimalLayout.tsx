import Head from "next/head";
import Tracking from "./tracking";
import { makeStyles } from "@material-ui/styles";
import { FC, ReactNode } from "react";
import Link from "next/link";
interface Props {
  background?: ReactNode;
}

export const siteTitle = "Jeremy Crowe";

const MinimalLayout: FC<Props> = (props) => {
  const { children, background } = props;

  const classes = useStyles();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal website for Jeremy Crowe" />
        <meta name="og:title" content={siteTitle} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        {/* Bring this back when I bother to make a privacy policy etc. */}
        {/* <Tracking /> */}
      </Head>
      <div className={classes.container}>
        <div className={classes.background}>{background}</div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default MinimalLayout;

const useStyles = makeStyles({
  link: {
    marginLeft: "8px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "space-between",
  },
  background: {
    zIndex: -1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  column: {
    flex: "1 0 100vh",
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    padding: "14px 48px",
  },
});
