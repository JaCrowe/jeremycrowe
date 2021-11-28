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

// https://jacrowe.solidcommunity.net/profile/card#me

const socialLinks: SocialLink[] = [
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
  {
    link: "https://www.instagram.com/_crowe_magnon/",
    src: "/images/instagram.svg",
    alt: "Jeremy Crowe's Instagram profile",
  },
  {
    link: "https://jacrowe.solidcommunity.net/profile/card#me",
    src: "/images/solidproject.svg",
    alt: "Jeremy Crowe's Solid @solidcommunity.net account",
  },
  {
    link: "https://mastodon.online/@JaCrowe",
    src: "/images/mastodon.svg",
    alt: "Jeremy Crowe's Mastodon @mastodon.online account",
  },
  {
    link: "https://pixelfed.social/JaCrowe",
    src: "/images/pixelfed-icon-color.svg",
    alt: "Jeremy Crowe's Pixelfed @pixelfed.social account",
  },
  {
    link: "https://matrix.to/#/@jacrowe:matrix.org",
    src: "/images/element.svg",
    alt: "Jeremy Crowe's element chat account",
  },
  // {
  //   link: "https://www.linkedin.com/in/jeremyacrowe/",
  //   src: "/images/facebook.svg",
  //   alt: "Jeremy Crowe's Facebook profile",
  // },
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
