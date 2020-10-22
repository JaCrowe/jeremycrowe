import Layout from "../components/MinimalLayout";
import { ReactElement } from "react";
import { makeStyles } from "@material-ui/styles";

const PrivacyPolicy = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.container}>
        <h1 className={classes.title}>Privacy Policy</h1>
        <p className={classes.description}>
          This website uses <a href="https://plausible.io">Plausible</a>{" "}
          analytics for anonymous view tracking. The following is a list of the
          data points that are collected upon your visit of this site.
        </p>
        <PrivacyItemTable />
      </div>
    </Layout>
  );
};

const PrivacyItemTable = () => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <table>
        <thead>
          <tr>
            <th className={classes.th}>Data Point</th>
            <th className={classes.th}>Example</th>
            <th className={classes.th}>Comment</th>
          </tr>
        </thead>
        <tbody>
          {privacyItems.map(({ dataPoint, example, comment }) => (
            <tr key={dataPoint}>
              <td>
                <p className={classes.dataPoint}>{dataPoint}</p>
              </td>
              <td>
                <p className={classes.example}>{example}</p>
              </td>
              <td>{comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

type privacyItem = {
  dataPoint: string;
  example: string;
  comment: ReactElement;
};

const privacyItems: privacyItem[] = [
  {
    dataPoint: "Page URL",
    example: "https://jeremycrowe.ca",
    comment: (
      <p>
        We track the page URL of each page view on our website. We use this to
        show us which pages have been viewed and how many times a particular
        page has been viewed. <br />
        <br />
        The hostname and path are collected. Query parameters are discarded,
        except for these special query parameters: <code>ref=</code>,{" "}
        <code>source=</code> and <code>utm_source=</code>.
      </p>
    ),
  },
  {
    dataPoint: "HTTP Referer",
    example: "https://google.com",
    comment: (
      <>
        We use the referrer string to show us the number of visitors referred to
        our website from links on other sites.
      </>
    ),
  },
  {
    dataPoint: "Browser",
    example: "Chrome",
    comment: (
      <>
        We use this to show us what browsers people use when visiting our
        website. This is derived from the User-Agent HTTP header. The full
        User-Agent is discarded.
      </>
    ),
  },
  {
    dataPoint: "Operating system",
    example: "macOS",
    comment: (
      <>
        We use this to show us what operating systems people use when visiting
        our website. We only show the brand of the operating system and don’t
        include the version number or any other details. This is derived from
        the User-Agent HTTP header. The full User-Agent is discarded.
      </>
    ),
  },
  {
    dataPoint: "Device type",
    example: "Desktop",
    comment: (
      <>
        We use this to show us what devices people use when visiting our
        website. This is derived from window.innerWidth. The actual width of the
        browser in pixels is discarded.
      </>
    ),
  },
  {
    dataPoint: "Visitor Country",
    example: "United Kingdom	",
    comment: (
      <>
        We look up the visitor’s country using their IP address. We do not track
        anything more granular than the country of origin and the IP address of
        the visitor is discarded. We never store IP addresses in our database or
        logs.
      </>
    ),
  },
];

const useStyles = makeStyles({
  title: { marginBottom: "16px" },
  description: {
    marginBottom: "32px",
  },
  th: {
    whiteSpace: "nowrap",
    textTransform: "uppercase",
  },
  dataPoint: {
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  example: {
    fontStyle: "italic",
    whiteSpace: "nowrap",
  },
  card: {
    minWidth: "600px",
    "& td": {
      paddingRight: "32px",
      verticalAlign: "top",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1200px",
    margin: "auto",
    justifyContent: "center",
  },
});

export default PrivacyPolicy;
