import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssBaseline>
      <Component {...pageProps} />
    </CssBaseline>
  )
}
