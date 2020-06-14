import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Huge fan of open source software and decentralized social media. Check me out or get in
          contact through my links below!
        </p>

        <div
          style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}
        >
          <a rel="me" href="https://realscience.social/@JaCrowe">
            <img
              src="/images/mastodon.svg"
              style={{ width: '64px', height: '64px', margin: '4px' }}
            />
          </a>
          <a rel="me" href="https://pixelfed.social/JaCrowe">
            <img
              src="/images/pixelfed-icon-color.svg"
              style={{ width: '64px', height: '64px', margin: '4px' }}
            />
          </a>
          <a rel="me" href="https://keybase.io/jacrowe">
            <img
              src="/images/keybase.svg"
              style={{ width: '64px', height: '64px', margin: '4px' }}
            />
          </a>
          <a rel="me" href="https://github.com/JaCrowe">
            <img
              src="/images/github.svg"
              style={{ width: '64px', height: '64px', margin: '4px' }}
            />
          </a>

          <a rel="me" href="https://www.linkedin.com/in/jeremyacrowe/">
            <img
              src="/images/linkedin.svg"
              style={{ width: '64px', height: '64px', margin: '4px' }}
            />
          </a>
          {/* https://www.linkedin.com/in/jeremyacrowe/ */}
          {/* https://keybase.io/jacrowe */}
          {/* https://github.com/JaCrowe */}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
