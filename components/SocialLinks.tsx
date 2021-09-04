import { makeStyles } from "@material-ui/styles";

export default function SocialLinks() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {socialLinks.map(({ link, src, alt }) => (
        <a rel="me" href={link} key={alt}>
          <img src={src} alt={alt} className={classes.socialIcon} />
        </a>
      ))}
    </div>
  );
}

type SocialLink = {
  link: string;
  src: string;
  alt: string;
};

const socialLinks: SocialLink[] = [
  // {
  //   link: 'https://mastodon.online/@JaCrowe',
  //   src: '/images/mastodon.svg',
  //   alt: "Jeremy Crowe's github account",
  // },
  // {
  //   link: "https://pixelfed.social/JaCrowe",
  //   src: "/images/pixelfed-icon-color.svg",
  //   alt: "Jeremy Crowe's github account",
  // },
  {
    link: "https://github.com/JaCrowe",
    src: "/images/github.svg",
    alt: "Jeremy Crowe's github account",
  },
  {
    link: "https://www.linkedin.com/in/jeremyacrowe/",
    src: "/images/linkedin.svg",
    alt: "Jeremy Crowe's LinkedIn profile",
  },
];

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: "500px",
    margin: "auto",
    justifyContent: "center",
  },
  socialIcon: {
    width: "32px",
    height: "32px",
    margin: "4px",
  },
});
