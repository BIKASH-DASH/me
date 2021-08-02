import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { SocialIcon } from 'react-social-icons';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const drawerWidth = 215;
const useStyles = makeStyles((theme) => ({
  social:{
    display:'flex',
    justifyContent: 'center',
    paddingTop:5
  },
  aboutme:{
    textAlign:'left'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperContainer: {
    backgroundImage: "url(" + "/images/bgbikash-dash.jpg" + ")",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height:250,
    backgroundSize:[239, 297],
    paddingTop:268
},
  AppBar:{
    left:drawerWidth,
    background: "#a43f49",
    color:'white',
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.AppBar}>
          <Toolbar>
            <Typography variant="h6" className='nevTitle' >About Me</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
      <Paper className={classes.paper}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
          Hey! 👋 I'm <Typography color="secondary" variant="h6" gutterBottom>Bikash Dash</Typography>

          Who Am I?
I'm a self-taught programmer who is learning to code for fun and enjoys learning new things. I have the hope of one day working at a company as a software developer, and until then I'll keep working on learning each day and enjoying the process. I have a fairly outgoing personality, so feel free to say hello!
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paperContainer}>
            <div className={classes.social} >
              <SocialIcon url="https://twitter.com/bikashd18327436" />
              <SocialIcon url="https://www.facebook.com/profile.php?id=100010879663940" />
              <SocialIcon url="https://stackoverflow.com/users/16320049/bikash-dash" />
              <SocialIcon url="https://www.linkedin.com/in/tobikash-dash/" />
              <SocialIcon url="https://github.com/bikash-dash" />

            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.paper}>
          <Typography variant="h6" color="secondary" className={classes.aboutme} >ABOUT ME</Typography>
          <ul className={classes.aboutme}>
            <li>9+ years top-rated track record (Web and Mobile Application Development)</li>
            <li>Tech Stack: JavaScript, Node.js, React, Angular, Vue.js, Express.js,PHP,Laravel,Wordpress, MySQL and PostgreSQL</li>
            <li>Amazon Web Services</li>
            <li>Perfectly adapted to your business processes and can offer you my ideas for implementation</li>
            <li>Solid experience in the development of payment gateway solutions and crypto banking application</li>
          </ul>


          </div>
        </Grid>
        
      </Grid>
      </Paper >
      </Container>
    </div>
  );
}