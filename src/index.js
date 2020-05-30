import React from 'react';
import ReactDOM from 'react-dom';
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
    root: {
        flexGrow: 1,
    },
    button: {
fontSize:'1.5rem'
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

    const classes = useStyles();

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
    <Button className={classes.button} color="inherit">Contact</Button>
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





</div>

      
    
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));