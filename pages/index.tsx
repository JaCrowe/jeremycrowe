import Head from 'next/head'
import Layout, { siteTitle } from '../components/MinimalLayout'
import SocialLinks from '../components/SocialLinks'
import ShrinkContainer from '../components/ShrinkContainer'

import React from 'react';
import Ribbons from '../components/Ribbons';

const Home = () => {
  return (
    <Layout background={<Ribbons />}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div style={{ padding: '0 48px' }}>
        <ShrinkContainer>
          <h1 style={{ marginBottom: '32px', textAlign: 'center' }}>Jeremy Crowe</h1>
          <p style={{ marginBottom: '16px', textAlign: 'center' }}>
            Full stack web developer, and a creative guy.
          </p>
          <SocialLinks />
        </ShrinkContainer>
      </div>
    </Layout>
  )
}

export default Home
