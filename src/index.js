import React, {useEffect, useState, useRef } from 'react';
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
import { ReactComponent as Logo } from './imgs/1.svg';



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
      height: '100vh'
    },
    bio: {
      display: 'flex',
    },
    svg: {
      padding: '3em 0 1em 1em'
    }
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
            <hr />

      {/*CONTACT FORM*/}
            <form className={classes.root} style={{ width: '100%' }} noValidate autoComplete="off">
      <TextField id="filled-basic" label="First Name" variant="filled" />
      <br />
      <TextField id="filled-basic" label="Last Name" variant="filled" />
      <br />
      <TextField fullWidth id="filled-basic"  label="Email" variant="filled"  />
      <br />
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
       
      
      </Modal>




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
  
<header>
  <h1>SKILLS</h1>
</header>

  <div className={classes.bio}>
      


     <Logo className={classes.svg}/>
     <div>Who am I?</div>


    </div>
<div class="wrap">
		<div class="comp">
			<div class="monitor">
				<div class="mid">
					<div class="site">
						<div class="topbar">
							<div class="cerrar">
								<div class="circl"></div>
								<div class="circl"></div>
								<div class="circl"></div>
							</div>
						</div>
						<div class="inhead">
							<div class="mid">
								<div class="item"></div>
							</div>
							<div class="mid txr">
								<div class="item"></div>
								<div class="item"></div>
								<div class="item"></div>
								<div class="item"></div>
							</div>
						</div>
						<div class="inslid">
							
						</div>
						<div class="incont">
							<div class="item"></div>
							<div class="item"></div>
							<div class="item"></div>
							<div class="item"></div>
							<div class="wid">
								<div class="itwid">
									<div>
										<div class="contfoot"></div>
									</div>
								</div>
								<div class="itwid">
									<div>
										<div class="contfoot"></div>
									</div>
								</div>
								<div class="itwid">
									<div>
										<div class="contfoot"></div>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="infoot">
								
							</div>
						</div>
					</div>
				</div>
				<div class="mid codigo">
					<div class="line">
						<div class="item var"></div>
						<div class="item cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line">
						<div class="item min var"></div>
						<div class="item min fun"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line">
						<div class="item var"></div>
						<div class="item atr"></div>
						<div class="item cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item min atr"></div>
						<div class="item lrg fun"></div>
						<div class="item min fun"></div>
						<div class="item lrg cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item lrg atr"></div>
						<div class="item min fun"></div>
						<div class="item min cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item atr"></div>
						<div class="item min fun"></div>
						<div class="item atr"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item min atr"></div>
						<div class="item min cont"></div>
						<div class="item lrg atr"></div>
						<div class="item  fun"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item min atr"></div>
						<div class="item lrg fun"></div>
						<div class="item lrg cont"></div>
						<div class="item min fun"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab2">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab2">
						<div class="item min atr"></div>
						<div class="item min fun"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab3">
						<div class="item min atr"></div>
						<div class="item min fun"></div>
						<div class="item lrg fun"></div>
						<div class="item lrg cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab3">
						<div class="item min atr"></div>
						<div class="item min fun"></div>
						<div class="item lrg atr"></div>
						<div class="item lrg cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab4">
						<div class="item min fun"></div>
						<div class="item lrg atr"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab1">
						<div class="item atr"></div>
						<div class="item var"></div>
						<div class="item cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab3">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line tab4">
						<div class="item min atr"></div>
						<div class="item min fun"></div>
						<div class="item lrg atr"></div>
						<div class="item lrg cont"></div>
						<div class="clearfix"></div>
					</div>
					<div class="line">
						<div class="item min var"></div>
						<div class="clearfix"></div>
					</div>
					
				</div>
			</div>
			<div class="base">
				
			</div>
		</div>
	</div>
  </Paper> 
{/* <div class="BIO">
  

</div>
       */}
    



</div>


  );
}

ReactDOM.render(<App />, document.querySelector('#root'));