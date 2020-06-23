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
          <a rel="me" href="https://mastodon.online/@JaCrowe">
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

          <a rel="me" href="https://github.com/JaCrowe">
            <img
              src="/images/github.svg"
              style={{ width: '64px', height: '64px', margin: '4px' }}
            />
          </a>
        </div>
        <p>
          Feeling sour about monolithic social media?{' '}
          <a href="https://www.nytimes.com/2020/06/22/podcasts/the-daily/facebook-twitter-black-lives-matter-trump.html">
            Well, you should if you care about black lives.
          </a>{' '}
          Want to do something about it? Get involved with a project that makes use of the{' '}
          <a href="https://www.w3.org/TR/activitypub">ActivityPub</a> protocol! A list of projects
          may be found{' '}
          <a href="https://git.feneas.org/feneas/fediverse/-/wikis/watchlist-for-activitypub-apps">
            here
          </a>
          ! My personal favorites at the moment far are{' '}
          <a href="https://joinmastodon.org/">Mastodon</a> and{' '}
          <a href="https://pixelfed.org/">PixelFed</a>
        </p>
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
