import React, { useState } from 'react';
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
import './style.css';
import logo from './imgs/logo.png';
import { shadows } from '@material-ui/system';
import './contact.css';
import { TweenLite, Linear } from "gsap";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all"; 
import { TweenMax, TimelineLite, Power2, Elastic } from "gsap";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';



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
    },
  }))(Avatar);

const useStyles = makeStyles((theme) => ({
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
    }
}));



function App() {
  const [currentFrame, setCurrentFrame] = useState(0)

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
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
     
     <Button id="contact" onClick={handleOpen} className={classes.button} color="inherit">Contact</Button>

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
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Contact Me.</h2>



            {currentFrame === 0 && 
      <main>
        <form>
  
<Button onClick={() => setCurrentFrame(currentFrame + 1)} className={classes.buttonContact} variant="contained" color="secondary">
Phone   <PhoneInTalkIcon/>

      </Button>
               
        </form>
      </main>
    }
    {currentFrame === 1 && 


        <main>
        
 
        <Button className={classes.buttonContact} variant="contained" color="secondary">
<a href="tel:1-562-867-5309">1-562-867-5309</a>
      </Button>
               
        </main>


    }
   






     
<button class="btn blue">Send Message
  <i class="fa fa-rss fa-fw"></i>
</button>
            <p id="transition-modal-description"> Email: Social icons.</p>
          </div>
        </Fade>
      </Modal>




  </Toolbar>
</AppBar>
	
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
	
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

<div class="BIO">
  BIO
  shadowsfsdf
  s
  dfs
  dfs
  d
  d
  describedbyd
  d
  describedbyd
  d
  d
  d
  d
  describedbyd
  d
  describedbyd
  d
  describedbyd
  d

</div>
      
    



</div>


  );
}

ReactDOM.render(<App />, document.querySelector('#root'));