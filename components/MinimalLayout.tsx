import Head from 'next/head'
import Tracking from './tracking'
import Link from 'next/link'
import { makeStyles } from '@material-ui/styles'
export const siteTitle = 'Jeremy Crowe'
import { FC, ReactNode } from 'react'

interface Props {
  background?: ReactNode
}

const MinimalLayout: FC<Props> = (props) => {
  const { children, background } = props

  const classes = useStyles()
  return (
    <>
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
      <div className={classes.container}>
        <div className={classes.background}>{background}</div>
        <div className={classes.column}>
          <header style={{ marginBottom: '32px' }}></header>
          <main style={{ flexGrow: 1 }}>{children}</main>
          <footer>
            <div
              className={classes.footerLinks}
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
    </>
  )
}

export default MinimalLayout

const useStyles = makeStyles({
  link: {
    marginLeft: '8px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  background: {
    zIndex: -1,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  column: {
    flex: '1 0 100vh', display: 'flex', flexDirection: 'column'
  },
  footerLinks: {
    width: '100%',
    maxWidth: '1280px',
    margin: 'auto',
    padding: '24px',
    display: 'flex',
  }
})
