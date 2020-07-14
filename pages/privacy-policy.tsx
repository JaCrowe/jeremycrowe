import Layout from '../components/MinimalLayout'
import {
  Typography,
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Card,
  useTheme,
  Theme,
} from '@material-ui/core'
import { ReactElement } from 'react'

const PrivacyPolicy = () => {
  const theme = useTheme()
  const classes = useStyles({ theme })
  return (
    <Layout>
      <Container>
        <Typography variant="h1" className={classes.title}>
          Privacy Policy
        </Typography>
        <Typography className={classes.description}>
          This website uses <a href="https://plausible.io">Plausible</a> analytics for anonymous
          view tracking.
        </Typography>
        <PrivacyItemTable />
      </Container>
    </Layout>
  )
}

const PrivacyItemTable = () => {
  const theme = useTheme()
  const classes = useStyles({ theme })
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.th}>Data Point</TableCell>
            <TableCell className={classes.th}>Example</TableCell>
            <TableCell className={classes.th}>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {privacyItems.map(({ dataPoint, example, comment }) => (
            <TableRow key={dataPoint}>
              <TableCell>
                <Typography className={classes.dataPoint}>{dataPoint}</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.example}>{example}</Typography>
              </TableCell>
              <TableCell>{comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

type privacyItem = {
  dataPoint: string
  example: string
  comment: ReactElement
}

const privacyItems: privacyItem[] = [
  {
    dataPoint: 'Page URL',
    example: 'https://jeremycrowe.ca',
    comment: (
      <Typography>
        We track the page URL of each page view on our website. We use this to show us which pages
        have been viewed and how many times a particular page has been viewed. <br />
        <br />
        The hostname and path are collected. Query parameters are discarded, except for these
        special query parameters: <code>ref=</code>, <code>source=</code> and{' '}
        <code>utm_source=</code>.
      </Typography>
    ),
  },
  {
    dataPoint: 'HTTP Referer',
    example: 'https://google.com',
    comment: (
      <>
        We use the referrer string to show us the number of visitors referred to our website from
        links on other sites.
      </>
    ),
  },
  {
    dataPoint: 'Browser',
    example: 'Chrome',
    comment: (
      <>
        We use this to show us what browsers people use when visiting our website. This is derived
        from the User-Agent HTTP header. The full User-Agent is discarded.
      </>
    ),
  },
  {
    dataPoint: 'Operating system',
    example: 'macOS',
    comment: (
      <>
        We use this to show us what operating systems people use when visiting our website. We only
        show the brand of the operating system and don’t include the version number or any other
        details. This is derived from the User-Agent HTTP header. The full User-Agent is discarded.
      </>
    ),
  },
  {
    dataPoint: 'Device type',
    example: 'Desktop',
    comment: (
      <>
        We use this to show us what devices people use when visiting our website. This is derived
        from window.innerWidth. The actual width of the browser in pixels is discarded.
      </>
    ),
  },
  {
    dataPoint: 'Visitor Country',
    example: 'United Kingdom	',
    comment: (
      <>
        We look up the visitor’s country using their IP address. We do not track anything more
        granular than the country of origin and the IP address of the visitor is discarded. We never
        store IP addresses in our database or logs.
      </>
    ),
  },
]

const useStyles = makeStyles({
  title: { marginBottom: '16px' },
  description: {
    marginBottom: '32px',
  },
  th: {
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
  },
  dataPoint: ({ theme }: { theme: Theme }) => {
    return {
      fontWeight: 600,
      wordBreak: 'break-all',
      [theme.breakpoints.up('sm')]: {
        whiteSpace: 'nowrap',
        wordBreak: 'keep-all',
      },
    }
  },
  example: ({ theme }: { theme: Theme }) => {
    return {
      fontStyle: 'italic',
      wordBreak: 'break-all',
      [theme.breakpoints.up('sm')]: {
        whiteSpace: 'nowrap',
        wordBreak: 'keep-all',
      },
    }
  },
})

export default PrivacyPolicy
