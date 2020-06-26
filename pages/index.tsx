import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
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
          <a rel="me" href="https://mastodon.online/@JaCrowe">
            <img
              src="/images/mastodon.svg"
              style={{ width: '64px', height: '64px', margin: '4px' }}
            />
          </a>
          <a href="https://pixelfed.social/JaCrowe">
            <img
              src="/images/pixelfed-icon-color.svg"
              style={{ width: '64px', height: '64px', margin: '4px' }}
            />
          </a>

          <a href="https://github.com/JaCrowe">
            <img
              src="/images/github.svg"
              style={{ width: '64px', height: '64px', margin: '4px' }}
            />
          </a>

          <a href="https://dev.lemmy.ml/u/JaCrowe">
            <img src="/images/lemmy.svg" style={{ width: '64px', height: '64px', margin: '4px' }} />
          </a>

          <a href="https://greatview.video/video-channels/avacadohand">
            <img
              src="/images/peertube.svg"
              style={{ width: '64px', height: '64px', margin: '4px' }}
            />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
