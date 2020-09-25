import Head from 'next/head'
import Layout, { siteTitle } from '../components/MinimalLayout'
import SocialLinks from '../components/SocialLinks'
import ShrinkContainer from '../components/ShrinkContainer'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div style={{ padding: '0 48px' }}>
        <ShrinkContainer>
          <h1 style={{ marginBottom: '32px', textAlign: 'center' }}>Jeremy Crowe</h1>
          <p style={{ marginBottom: '16px', textAlign: 'center' }}>
            Full stack web developer, creative guy and an advocate of federated social media.
          </p>
          <SocialLinks />
        </ShrinkContainer>
      </div>
    </Layout>
  )
}

export default Home
