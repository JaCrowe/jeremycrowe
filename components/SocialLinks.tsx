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

type SocialLink = {
  link: string
  src: string
}

const socialLinks: SocialLink[] = [
  {
    link: 'https://mastodon.online/@JaCrowe',
    src: '/images/mastodon.svgv',
  },
  {
    link: 'https://pixelfed.social/JaCrowe',
    src: '/images/pixelfed-icon-color.svg',
  },

  {
    link: 'https://github.com/JaCrowe',
    src: '/images/github.svg',
  },
  {
    link: 'https://dev.lemmy.ml/u/JaCrowe',
    src: '/images/lemmy.svg',
  },
  {
    link: 'https://greatview.video/video-channels/avacadohand',
    src: '/images/peertube.svg',
  },
]

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
