import Head from 'next/head'
import Tracking from './tracking'

export const siteTitle = 'Jeremy Crowe'

export default function MinimalLayout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
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
      <main>{children}</main>
    </div>
  )
}
