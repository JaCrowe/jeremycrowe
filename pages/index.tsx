import Head from 'next/head'
import Layout, { siteTitle } from '../components/MinimalLayout'
import { Typography, Container } from '@material-ui/core'
import SocialLinks from '../components/SocialLinks'
import ShrinkContainer from '../components/ShrinkContainer'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <ShrinkContainer>
          <Typography variant="h1" style={{ marginBottom: '32px', textAlign: 'center' }}>
            Jeremy Crowe
          </Typography>
          <Typography variant="subtitle1" style={{ marginBottom: '16px', textAlign: 'center' }}>
            Full stack web developer, creative guy and an advocate of federated social media.
          </Typography>
          <SocialLinks />
        </ShrinkContainer>
      </Container>
    </Layout>
  )
}
