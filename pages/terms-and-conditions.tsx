import Layout from '../components/MinimalLayout'
import { Typography, Container } from '@material-ui/core'

export default function TermsAndConditions({ allPostsData }) {
  return (
    <Layout>
      <Container>
        <Typography variant="h1" style={{ marginBottom: '64px' }}>
          Terms and Conditions
        </Typography>
        <Typography variant="h4" style={{ marginBottom: '32px' }}>
          COPYRIGHT
        </Typography>
        <Typography>
          At the moment I have nothing worth protecting on this website. I intend to put content up
          here later, likely under creative commons.
        </Typography>
      </Container>
    </Layout>
  )
}
