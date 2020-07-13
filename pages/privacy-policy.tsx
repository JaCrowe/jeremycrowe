import Layout from '../components/MinimalLayout'
import {
  Typography,
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'

export default function PrivacyPolicy({ allPostsData }) {
  return (
    <Layout>
      <Container>
        <Typography variant="h1" style={{ marginBottom: '64px' }}>
          Privacy Policy
        </Typography>
        <Typography>
          This website only uses <a href="https://plausible.io">Plausible</a> analytics for basic
          statistics tracking.
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data Point</TableCell>
              <TableCell>Example</TableCell>
              <TableCell>Comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Page URL</TableCell>
              <TableCell>https://yoursite.com/pricing</TableCell>
              <TableCell>
                We track the page URL of each page view on your website. We use this to show you
                which pages have been viewed and how many times a particular page has been viewed.
                The hostname and path are collected. Query parameters are discarded, except for
                these special query parameters: ref=, source= and utm_source=.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Container>
    </Layout>
  )
}
