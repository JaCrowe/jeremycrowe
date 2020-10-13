import { makeStyles } from '@material-ui/styles'
import Layout from '../components/MinimalLayout'

export default function TermsAndConditions({ allPostsData }) {
  const classes = useStyles()
  return (
    <Layout>
    <div className={classes.container}>
        <h1 style={{ marginBottom: '64px' }}>
          Terms and Conditions
        </h1>
        <h4 style={{ marginBottom: '32px' }}>
          COPYRIGHT
        </h4>
        <p>
          At the moment I have nothing worth protecting on this website. I intend to put content up
          here later, likely under creative commons.
        </p>
      </div>
    </Layout>
  )
}

const useStyles = makeStyles({
  title: { marginBottom: '16px' },
  description: {
    marginBottom: '32px',
  },
  th: {
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
  },
  dataPoint: {
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  example: {
    fontStyle: 'italic',
    whiteSpace: 'nowrap',
  },
  card: {
    minWidth: '600px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
    margin: 'auto',
    justifyContent: 'center',
  },
})
