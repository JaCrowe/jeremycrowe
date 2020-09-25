import Head from 'next/head'
import Tracking from './tracking'
import Link from 'next/link'
import { makeStyles } from '@material-ui/styles'
export const siteTitle = 'Jeremy Crowe'

export default function MinimalLayout({ children }: { children: React.ReactNode }) {
  const classes = useStyles()
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '1 0 100vh', display: 'flex', flexDirection: 'column' }}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Personal website for Jeremy Crowe" />
          <meta name="og:title" content={siteTitle} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          <Tracking />
        </Head>
        <header style={{ marginBottom: '32px' }}></header>
        <main style={{ flexGrow: 1 }}>{children}</main>
        <footer>
          <div
            style={{
              width: '100%',
              maxWidth: '1280px',
              margin: 'auto',
              padding: '24px',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Link href="/">
              <a className={classes.link}>Home</a>
            </Link>
            <Link href="/privacy-policy">
              <a className={classes.link}>Privacy Policy</a>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  link: {
    marginLeft: '8px',
  },
})
