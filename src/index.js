import React, { useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import "./style.scss";
import Link from "@material-ui/core/Link";
import logo from "./imgs/logo.png";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { ReactComponent as Logo1 } from "./imgs/skills/1.svg";
import { ReactComponent as Logo2 } from "./imgs/skills/2.svg";
import { ReactComponent as Logo3 } from "./imgs/skills/3.svg";
import { ReactComponent as Logo4 } from "./imgs/skills/4.svg";
import { ReactComponent as Logo5 } from "./imgs/skills/5.svg";
import { ReactComponent as Logo6 } from "./imgs/skills/6.svg";
import { ReactComponent as Logo7 } from "./imgs/skills/7.svg";
import { ReactComponent as Logo8 } from "./imgs/skills/8.svg";
import { ReactComponent as Logo9 } from "./imgs/skills/9.svg";
import { ReactComponent as Logo10 } from "./imgs/skills/10.svg";
import { ReactComponent as Logo11 } from "./imgs/skills/11.svg";
import { ReactComponent as Logo12 } from "./imgs/skills/12.svg";
import Arrow from "./components/atoms/Arrow/Arrow";
import Up from "./components/atoms/Arrow/Up";
import CustomModal from "./components/organisms/modals/Modal";
import landingOne from "./imgs/landing.png";
import spotify from "./imgs/spotify.png";
import facebook from "./imgs/FACEBOOK.png";
import travel from "./imgs/travel.png";
import modal from "./imgs/modal.png";
import eye from "./imgs/eye.png";
import pacman from "./imgs/pacman.png";
import picture from "./imgs/picture.png";
import youtube from "./imgs/youtube.png";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },

  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalpaper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    borderRadius: "5px",
    padding: theme.spacing(2, 4, 3),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    borderRadius: "5px",
    padding: theme.spacing(2, 4, 3),
    width: "100%",
    margin: "0.5em",
  },
  root: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    container: {
      display: "flex",
    },
    svg: {
      width: 100,
      height: 100,
    },
  },
  button: {
    fontSize: "1.5rem",
    marginRight: "3.0rem",
  },
  buttonContact: {
    width: "16rem",
    textDecoration: "none",
    color: "white",

    fontSize: "18px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  totalmenu: {
    color: "white",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  first: {},
  bio: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  svg: {
    padding: "3em 1em 1em 1em",
  },
  second: {
    textAlign: "left",
  },
  reactcard: {
    minWidth: 315,
    height: "350px",
    fontSize: "30px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  titl: {
    fontSize: 20,
  },
}));

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function App() {
  const [currentFrame, setCurrentFrame] = useState(0);

  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  window.addEventListener("load", (TransitionUp) => {});

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const preventDefault = (event) => event.preventDefault();
  return (
    <>
      <div id="myPageContent" class="container-fluid">
        <section id="home">
          <AppBar position="static" className={classes.totalmenu}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <Typography variant="h6" className={classes.title}>
                <div className={classes.root}>
                  <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    variant="dot"
                  >
                    <Avatar src={logo} />
                  </StyledBadge>
                </div>
              </Typography>
              <Button
                href="#header"
                id="contact"
                className={classes.button}
                color="inherit"
              >
                Bio
              </Button>
              <Button
                href="#skills"
                id="contact"
                className={classes.button}
                color="inherit"
              >
                Skills
              </Button>

              <Button
                href="#projects"
                id="contact"
                className={classes.button}
                color="inherit"
              >
                Projects
              </Button>

              <Button
                id="contact"
                onClick={handleOpen}
                className={classes.button}
                color="inherit"
              >
                Contact
              </Button>

              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.modalpaper}>
                    <h2 id="transition-modal-title">Contact Me.</h2>
                    <hr />

                    <form
                      method="post"
                      className={classes.root}
                      style={{ width: "100%" }}
                      autoComplete="off"
                    >
                      <input type="hidden" name="form-name" value="contact" />

                      <TextField
                        name="name"
                        type="text"
                        id="filled-basic"
                        label="Full Name"
                        variant="filled"
                      />
                      <br />

                      <TextField
                        name="email"
                        id="filled-basic"
                        type="email"
                        label="Email"
                        variant="filled"
                      />
                      <br />

                      <TextField
                        name="message"
                        id="filled-textarea"
                        label="Message"
                        placeholder=""
                        multiline
                        variant="filled"
                      />
                      <br />
                      <Button
                        type="submit"
                        display="flex"
                        justifyContent="center"
                        variant="contained"
                        color="secondary"
                      >
                        Send Message{" "}
                      </Button>
                      <hr />
                      <a href="https://www.linkedin.com/in/daryldauphin/">
                        <LinkedInIcon
                          fontSize="large"
                          style={{ color: "black" }}
                        />
                      </a>
                      <a href="https://twitter.com/DarylDauphin">
                        <TwitterIcon
                          fontSize="large"
                          style={{ color: "black" }}
                        />
                      </a>
                    </form>
                  </div>
                </Fade>
              </Modal>

              {/* <CustomModal useStyles={useStyles} open={open} handleClose={handleClose} Backdrop={Backdrop}/> */}
            </Toolbar>
          </AppBar>
          <div>
            {" "}
            <Button
              severity="warning"
              onClick={handleClick(TransitionUp)}
            ></Button>
            <Snackbar
              open={open}
              TransitionComponent={transition}
              severity="warning"
              fontSize="large"
              message="Currently Looking for Work 😊"
              key={transition ? transition.name : ""}
            />
          </div>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

          <Arrow />
          <Up />

          <div id="textSlider" class="row">
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4 iamCol">
              <p>Daryl </p>
              <p>Dauphin</p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 slideCol">
              <div class="scroller">
                <div class="inner">
                  <p>Software Developer</p>
                  <p>React.JS</p>
                  <p>WordPress</p>
                  <p>Material UI</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Paper
        className={classes.first}
        boxShadow={3}
        elevation={3}
        variant="outlined"
      >
        <div class="space">
          <header id="header">
            <h1 id="#biog">BIO</h1>
          </header>
        </div>

        <div className={classes.bio}>
          <div class="cContainer">
            <div class="card">
              <Card>
                <iframe
                  width="1000"
                  height="630"
                  srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/NZPZ9PFfqAc?autoplay=1><img src=https://img.youtube.com/vi/NZPZ9PFfqAc/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
                  src="https://www.youtube.com/embed/NZPZ9PFfqAc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p class="intro">
                  {" "}
                  Hello 👋🏽, my name is Daryl Dauphin, I am a software developer
                  from Greater Boston Area, my skills include HTML, CSS and
                  <br /> JavaScript. I am also knowledgable in React.JS and
                  WordPress.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Paper>
      <Paper
        className={classes.first}
        boxShadow={3}
        elevation={3}
        variant="outlined"
      >
        <div class="space">
          <header id="header">
            <h1 id="skills">SKILLS</h1>
          </header>
        </div>
        <div className={classes.bio}>
          <div class="cContainer">
            <div class="card">
              <Card className={classes.reactcard}>
                <CardContent>
                  <Logo1 width="275" height="275"></Logo1>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>

          <div class="cContainer">
            <div class="card">
              <Card className={classes.reactcard}>
                <CardContent>
                  <Logo2 width="275" height="275"></Logo2>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>

          <div class="cContainer">
            <div class="card">
              <Card className={classes.reactcard}>
                <CardContent>
                  <Logo3 width="275" height="275"></Logo3>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>

          <div class="cContainer">
            <div class="card">
              <Card className={classes.reactcard}>
                <CardContent>
                  <Logo4 width="275" height="275"></Logo4>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>

          <div class="cContainer">
            <div class="card">
              <Card className={classes.reactcard}>
                <CardContent>
                  <Logo5 width="275" height="275"></Logo5>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>

          <div class="cContainer">
            <div class="card">
              <Card className={classes.reactcard}>
                <CardContent>
                  <Logo7 width="275" height="275"></Logo7>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>

          <div class="cContainer">
            <div class="card">
              <Card className={classes.reactcard}>
                <CardContent>
                  <Logo9 width="275" height="275"></Logo9>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>

          <div class="cContainer">
            <div class="card">
              <Card className={classes.reactcard}>
                <CardContent>
                  <Logo12 width="275" height="275"></Logo12>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </div>
        </div>
      </Paper>

      <Paper>
        <div>
          <div class="space">
            <header id="projects">
              <h1>PROJECTS</h1>
            </header>
          </div>
          <div className={classes.bio}>
            <a href="https://zen-lewin-94ead4.netlify.app/" target="_blank">
              <div class="cContainer">
                <div class="card">
                  <Card className={classes.reactcard}>
                    <CardContent>
                      <img
                        width="275"
                        height="275"
                        src={landingOne}
                        alt="Logo"
                      />
                    </CardContent>
                    <CardActions>
                      <Button
                        href="https://zen-lewin-94ead4.netlify.app/"
                        onClick={
                          ("https://zen-lewin-94ead4.netlify.app/", "_blank")
                        }
                        style={{ color: "black" }}
                        size="small"
                      >
                        View Site
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </a>

            <a href="https://musing-euclid-d57b98.netlify.app/" target="_blank">
              <div class="cContainer">
                <div class="card">
                  <Card className={classes.reactcard}>
                    <CardContent>
                      <img width="280" height="270" src={facebook} alt="Logo" />
                    </CardContent>
                    <CardActions>
                      <Button
                        href="https://musing-euclid-d57b98.netlify.app/"
                        onClick={
                          ("https://musing-euclid-d57b98.netlify.app/",
                          "_blank")
                        }
                        style={{ color: "black" }}
                        size="small"
                      >
                        View Site
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </a>
            <a
              href="https://vigorous-hodgkin-127466.netlify.app/"
              target="_blank"
            >
              <div class="cContainer">
                <div class="card">
                  <Card className={classes.reactcard}>
                    <CardContent>
                      <img width="280" height="270" src={travel} alt="Logo" />
                    </CardContent>
                    <CardActions>
                      <Button
                        href="https://vigorous-hodgkin-127466.netlify.app/"
                        onClick={
                          ("https://vigorous-hodgkin-127466.netlify.app/",
                          "_blank")
                        }
                        style={{ color: "black" }}
                        size="small"
                      >
                        View Site
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </a>

            <a
              href="https://daryldauphin.github.io/spotify-clone/"
              target="_blank"
            >
              <div class="cContainer">
                <div class="card">
                  <Card className={classes.reactcard}>
                    <CardContent>
                      <img width="270" height="270" src={spotify} alt="Logo" />
                    </CardContent>
                    <CardActions>
                      <Button
                        href="https://daryldauphin.github.io/spotify-clone/"
                        onClick={
                          ("https://daryldauphin.github.io/spotify-clone/",
                          "_blank")
                        }
                        style={{ color: "black" }}
                        size="small"
                      >
                        View Site
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </a>

            <a
              href="https://daryldauphin.github.io/javascript-pop-up-modal/"
              target="_blank"
            >
              <div class="cContainer">
                <div class="card">
                  <Card className={classes.reactcard}>
                    <CardContent>
                      <img width="280" height="270" src={modal} alt="Logo" />
                    </CardContent>
                    <CardActions>
                      <Button
                        href="https://daryldauphin.github.io/javascript-pop-up-modal/"
                        onClick={
                          ("https://daryldauphin.github.io/javascript-pop-up-modal/",
                          "_blank")
                        }
                        style={{ color: "black" }}
                        size="small"
                      >
                        View Site
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </a>
            <a
              href="https://daryldauphin.github.io/eye-mouse-tracker/"
              target="_blank"
            >
              <div class="cContainer">
                <div class="card">
                  <Card className={classes.reactcard}>
                    <CardContent>
                      <img width="280" height="270" src={eye} alt="Logo" />
                    </CardContent>
                    <CardActions>
                      <Button
                        href="https://daryldauphin.github.io/eye-mouse-tracker/"
                        onClick={
                          ("https://daryldauphin.github.io/eye-mouse-tracker/",
                          "_blank")
                        }
                        style={{ color: "black" }}
                        size="small"
                      >
                        View Site
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </a>
            <a href="https://daryldauphin.github.io/pacman/" target="_blank">
              <div class="cContainer">
                <div class="card">
                  <Card className={classes.reactcard}>
                    <CardContent>
                      <img width="280" height="270" src={pacman} alt="Logo" />
                    </CardContent>
                    <CardActions>
                      <Button
                        href="https://daryldauphin.github.io/pacman/"
                        onClick={
                          ("https://daryldauphin.github.io/pacman/", "_blank")
                        }
                        style={{ color: "black" }}
                        size="small"
                      >
                        View Site
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </a>
            <a
              href="https://trusting-varahamihira-ed44f7.netlify.app/"
              target="_blank"
            >
              <div class="cContainer">
                <div class="card">
                  <Card className={classes.reactcard}>
                    <CardContent>
                      <img width="280" height="270" src={picture} alt="Logo" />
                    </CardContent>
                    <CardActions>
                      <Button
                        href="https://trusting-varahamihira-ed44f7.netlify.app/"
                        onClick={
                          ("https://trusting-varahamihira-ed44f7.netlify.app/",
                          "_blank")
                        }
                        style={{ color: "black" }}
                        size="small"
                      >
                        View Site
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Paper>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
