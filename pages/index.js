import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I believe that decantralized social media is the future, but that we're going to need to
          do some work to get there. Come join me on Mastadon! A decentralized Twitter alternative.{' '}
          <a href="https://realscience.social">realscience.social</a>.
        </p>

        <div
          style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}
        >
          <a rel="me" href="https://realscience.social/@JaCrowe">
            <img src="/images/mastodon.svg" style={{ width: '128px', height: '128px' }} />
          </a>
        </div>

        {/* <p>
          Are you active in social media? I urge you to join the Fediverse and highly recommend
          Mastodon. If we are to acheieve mass adoption of decentalized social media, your feedback
          and opinions will be essential!
        </p>
        <p>
          Are you a web developer? I urge you to contribute to the open source projects that allow
          instances of Fediverse participants to operate!
        </p> */}
        {/* <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
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
