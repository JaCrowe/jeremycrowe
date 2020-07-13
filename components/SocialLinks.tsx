import { makeStyles } from '@material-ui/core'

export default function SocialLinks() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <a rel="me" href="https://mastodon.online/@JaCrowe">
        <img src="/images/mastodon.svg" className={classes.socialIcon} />
      </a>
      <a href="https://pixelfed.social/JaCrowe">
        <img src="/images/pixelfed-icon-color.svg" className={classes.socialIcon} />
      </a>
      <a href="https://github.com/JaCrowe">
        <img src="/images/github.svg" className={classes.socialIcon} />
      </a>
      <a href="https://dev.lemmy.ml/u/JaCrowe">
        <img src="/images/lemmy.svg" className={classes.socialIcon} />
      </a>
      <a href="https://greatview.video/video-channels/avacadohand">
        <img src="/images/peertube.svg" className={classes.socialIcon} />
      </a>
    </div>
  )
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '500px',
    margin: 'auto',
    justifyContent: 'space-between',
  },
  socialIcon: {
    width: '64px',
    height: '64px',
    margin: '4px',
  },
})
