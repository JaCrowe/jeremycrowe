import { makeStyles } from '@material-ui/core'

export default function SocialLinks() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {socialLinks.map(({ link, src, alt }) => (
        <a rel="me" href={link}>
          <img src={src} alt={alt} className={classes.socialIcon} />
        </a>
      ))}
    </div>
  )
}

type SocialLink = {
  link: string
  src: string
  alt: string
}

const socialLinks: SocialLink[] = [
  // {
  //   link: 'https://mastodon.online/@JaCrowe',
  //   src: '/images/mastodon.svg',
  // },
  // {
  //   link: 'https://pixelfed.social/JaCrowe',
  //   src: '/images/pixelfed-icon-color.svg',
  // },
  {
    link: 'https://github.com/JaCrowe',
    src: '/images/github.svg',
    alt: "Jeremy Crowe's github account",
  },
  {
    link: 'https://www.linkedin.com/in/jeremyacrowe/',
    src: '/images/linkedin.svg',
    alt: "Jeremy Crowe's LinkedIn profile",
  },
  // {
  //   link: 'https://dev.lemmy.ml/u/JaCrowe',
  //   src: '/images/lemmy.svg',
  // },
  // {
  //   link: 'https://greatview.video/video-channels/avacadohand',
  //   src: '/images/peertube.svg',
  // },
]

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: '500px',
    margin: 'auto',
    justifyContent: 'center',
  },
  socialIcon: {
    width: '32px',
    height: '32px',
    margin: '4px',
  },
})
