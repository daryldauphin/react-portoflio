import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap/all';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Color from 'color';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import './style.scss';
import logo from './imgs/logo.png';
import { shadows } from '@material-ui/system';
import './contact.css';
import { TweenLite, Linear } from "gsap";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all"; 
import { TweenMax, TimelineLite, Power3, Elastic } from "gsap";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import {animateIn, animateOut} from './gsap'
import TextField from '@material-ui/core/TextField';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { ReactComponent as Logo1 } from './imgs/skills/1.svg';
import { ReactComponent as Logo2 } from './imgs/skills/2.svg';
import { ReactComponent as Logo3 } from './imgs/skills/3.svg';
import { ReactComponent as Logo4 } from './imgs/skills/4.svg';
import { ReactComponent as Logo5 } from './imgs/skills/5.svg';
import { ReactComponent as Logo6 } from './imgs/skills/6.svg';
import { ReactComponent as Logo7 } from './imgs/skills/7.svg';
import { ReactComponent as Logo8 } from './imgs/skills/8.svg';
import { ReactComponent as Logo9 } from './imgs/skills/9.svg';
import { ReactComponent as Logo10 } from './imgs/skills/10.svg';
import { ReactComponent as Logo11 } from './imgs/skills/11.svg';
import { ReactComponent as Logo12 } from './imgs/skills/12.svg';
import Arrow from './components/atoms/Arrow/Arrow';
import Up from './components/atoms/Arrow/Up';
import CustomModal from './components/organisms/modals/Modal'







function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}






const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
  const SmallAvatar = withStyles((theme) => ({
    root: {
      
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
      width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
      
    },
  }))(Avatar);

const useStyles = makeStyles((theme) => ({
  
  container: {
    display: 'flex',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    borderRadius: '5px',
    padding: theme.spacing(2, 4, 3),
  },
    root: {
      
        flexGrow: 1,
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
        container: {
          display: 'flex',
        },
        svg: {
          width: 100,
          height: 100,
        },
    },
    button: {
fontSize:'1.5rem',
marginRight: '3.0rem',
    },
    buttonContact: {
      width: '16rem',
      textDecoration: 'none',
      color: 'white',
      
      fontSize: '18px'
          },
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        flexGrow: 1,
    },
    totalmenu: {    
        color: 'white',
        boxShadow: 'none',
        backgroundColor: 'transparent'
    },
    first:{
  

    },
    bio: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'center'
      

        },
    svg: {
      padding: '3em 1em 1em 1em'
    },
    second: {
      textAlign: 'left'
    },
    reactcard: {
      minWidth: 315,
      height: '350px',
      margin: '0.5em',
      fontSize: '30px'
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    titl: {
      fontSize: 20,
    },
    
}));


function App() {
  const [currentFrame, setCurrentFrame] = useState(0)

    const classes = useStyles();
    const handleOpen = () => {
      setOpen(true);
    };

  
  
    window.addEventListener('load', (TransitionUp) => {
    });
  
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
  return (
    
      <div>
        
     
<div id="myPageContent" class="container-fluid">
<section id="home">
	<AppBar position="static" className={classes.totalmenu} >
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    </IconButton>
    <Typography variant="h6" className={classes.title}>
        
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar src={logo} />
      </StyledBadge>
    
    </div>
     </Typography>
     
     <Button href="#header" id="contact"  className={classes.button} color="inherit">Skills</Button>

     <Button href="#projects" id="contact"  className={classes.button} color="inherit">Projects</Button>

     <Button id="contact" onClick={handleOpen} className={classes.button} color="inherit">Contact</Button>

     {/* <Modal
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
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Contact Me.</h2>
            <hr />

            <form className={classes.root} style={{ width: '100%' }} noValidate autoComplete="off">
      <TextField id="filled-basic" label="First Name" variant="filled" />
      <br />
      <TextField id="filled-basic" label="Last Name" variant="filled" />
      <br />
      
      <TextField />
      <TextField
          id="filled-textarea"
          label="Message"
          placeholder=""
          multiline
          variant="filled"
        />
        <br />
<Button display="flex" justifyContent="center" variant="contained" color="secondary">
Send Message      </Button>
<hr />
<LinkedInIcon fontSize="large"/>
<TwitterIcon fontSize="large" />
    </form>
    
          </div>
        </Fade>
       
      
      </Modal> */}


<CustomModal useStyles={useStyles} open={open} handleClose={handleClose} Backdrop={Backdrop}/>

  </Toolbar>
</AppBar>
<div> <Button severity="warning" onClick={handleClick(TransitionUp)}></Button>
      <Snackbar
        open={open}
        TransitionComponent={transition}
        severity="warning"
        fontSize="large"
        message="Currently Looking for Work 😊"
        key={transition ? transition.name : ''}
      /></div>
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>

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
								<p>Web Developer</p>
								<p>React.JS</p>
                <p>Material UI</p>
								<p>WordPress</p>
								<p>BootStrap 4</p>
                <p>Adobe CC</p>
                <p>SEO</p>
								<p>Git</p>

							</div>
						</div>
					</div>
	
				</div>
	
	
	
	
	
</section>
</div>  

<Paper className={classes.first} boxShadow={3} elevation={3} variant="outlined">
  
<header id="header">
  <h1>SKILLS</h1>
</header>

  <div className={classes.bio}>
      


     
     <Card className={classes.reactcard} >
      <CardContent>
        <Logo1
        width="275" height="275" 
        >
          
          
          
          </Logo1>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card className={classes.reactcard}>
      <CardContent>
      <Logo2
        width="275" height="275" 
        >
          
          
          
          </Logo2>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.reactcard}>
      <CardContent>
      <Logo3
        width="275" height="275" 
        >
          
          
          
          </Logo3>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.reactcard}>
      <CardContent>
      <Logo4
        width="275" height="275" 
        >
          
          
          
          </Logo4>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.reactcard}>
      <CardContent>
      <Logo5
        width="275" height="275" 
        >
          
          
          
          </Logo5>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.reactcard}>
      <CardContent>
      <Logo6
        width="275" height="275" 
        >
          
          
          
          </Logo6>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card className={classes.reactcard} >
      <CardContent>
      <Logo7
        width="275" height="275" 
        >
          
          
          
          </Logo7>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card className={classes.reactcard}>
      <CardContent>
      <Logo8
        width="275" height="275" 
        >
          
          
          
          </Logo8>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.reactcard}>
      <CardContent>
      <Logo9
        width="275" height="275" 
        >
          
          
          
          </Logo9>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.reactcard}>
      <CardContent>
      <Logo10
        width="275" height="275" 
        >
          
          
          
          </Logo10>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.reactcard}>
      <CardContent>
      <Logo11
        width="275" height="275" 
        >
          
          
          
          </Logo11>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.reactcard}>
      <CardContent>
      <Logo12
        width="275" height="275" 
        >
          
          
          
          </Logo12>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</div>
  </Paper> 
<Paper>
  <div>
  <header id="projects">
  <h1>PROJECTS</h1>
</header>


  </div>
</Paper>
</div>

  );
}

ReactDOM.render(<App />, document.querySelector('#root'));