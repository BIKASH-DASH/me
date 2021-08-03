import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const drawerWidth = 215;

const useStyles = makeStyles((theme) => ({
    Button:{
      padding:5,
    },
    buttonTag:{
      padding:5,
      display:'flex',
      justifyContent:"space-between"
    },
    tagImage:{
      height:23,
      paddingLeft:5
    },
    PaperText:{
      textAlign:'left',
      padding:16
    },
    header:{
      display:'flex',
      justifyContent:"start",
      background: "#a43f49",
      height:26,
      padding:2
    },
    headerText:{
      color:"black",
      paddingLeft:5,
      fontSize:18,
      marginTop:'-2px',
      fontWeight:'bold'
    },
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
  
export default function WhatImGoodAt(props) {
    const classes = useStyles();
    return (
        <div>
             <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.AppBar}>
          <Toolbar>
            <Typography variant="h6" className='nevTitle' >What I am Good At</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <Paper className={classes.paper}>
              <div className={classes.header}>
                  <img src="/logo192.png" />
                  <Typography className={classes.headerText} variant="caption" >React</Typography>
                 
              </div>
              <Typography variant="body2" className={classes.PaperText} color="textSecondary" component="p">
              It’s been 4 years since I have been working in React. React is the most popular front-end JavaScript library in the field of web development.
              </Typography>
              <Typography variant="body3" className={classes.PaperText} color="textSecondary" component="h4">The Technology I use in React Development are : </Typography>
             <div className={classes.buttonTag}>
             <Button className={classes.Button} variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/redux.svg" /> Redux
              </Button>

              <Button className={classes.Button}  variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/graphql.svg" /> Graphql
              </Button>

              <Button className={classes.Button} variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/elephant.png" /> postgresql
              </Button>
             </div>
            <div>
              
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <div className={classes.header}>
                 <svg width="5.6875rem" height="1.5rem" viewBox="0 0 106 28" class="css-etwj4y"><g fill="#000000"><path d="M62.9,12h2.8v10h-2.8v-1.3c-1,1.5-2.3,1.6-3.1,1.6c-3.1,0-5.1-2.4-5.1-5.3c0-3,2-5.3,4.9-5.3c0.8,0,2.3,0.1,3.2,1.6V12z M57.7,17c0,1.6,1.1,2.8,2.8,2.8c1.6,0,2.8-1.2,2.8-2.8c0-1.6-1.1-2.8-2.8-2.8C58.9,14.2,57.7,15.4,57.7,17z"></path><path d="M71.2,14.4V22h-2.8v-7.6h-1.1V12h1.1V8.6h2.8V12h1.9v2.4H71.2z"></path><path d="M79.7,14.4c-0.7-0.6-1.3-0.7-1.6-0.7c-0.7,0-1.1,0.3-1.1,0.8c0,0.3,0.1,0.6,0.9,0.9l0.7,0.2c0.8,0.3,2,0.6,2.5,1.4 c0.3,0.4,0.5,1,0.5,1.7c0,0.9-0.3,1.8-1.1,2.5c-0.8,0.7-1.8,1.1-3,1.1c-2.1,0-3.2-1-3.9-1.7l1.5-1.7c0.6,0.6,1.4,1.2,2.2,1.2 c0.8,0,1.4-0.4,1.4-1.1c0-0.6-0.5-0.9-0.9-1l-0.6-0.2c-0.7-0.3-1.5-0.6-2.1-1.2c-0.5-0.5-0.8-1.1-0.8-1.9c0-1,0.5-1.8,1-2.3 c0.8-0.6,1.8-0.7,2.6-0.7c0.7,0,1.9,0.1,3.2,1.1L79.7,14.4z"></path><path d="M85.8,13.3c1-1.4,2.4-1.6,3.2-1.6c2.9,0,4.9,2.3,4.9,5.3c0,3-2,5.3-5,5.3c-0.6,0-2.1-0.1-3.2-1.6V22H83V5.2h2.8V13.3z M85.5,17c0,1.6,1.1,2.8,2.8,2.8c1.6,0,2.8-1.2,2.8-2.8c0-1.6-1.1-2.8-2.8-2.8C86.6,14.2,85.5,15.4,85.5,17z"></path><path d="M98.5,20.5L93.7,12H97l3.1,5.7l2.8-5.7h3.2l-8,15.3h-3.2L98.5,20.5z"></path><path d="M54,13.7h-2.8c0,0-4.2,0-4.2,0v2.8h3.7c-0.6,1.9-2,3.2-4.6,3.2c-2.9,0-5-2.4-5-5.3S43.1,9,46,9c1.6,0,3.2,0.8,4.2,2.1 l2.3-1.5C51,7.5,48.6,6.3,46,6.3c-4.4,0-8,3.6-8,8.1s3.4,8.1,8,8.1s8-3.6,8-8.1C54.1,14.1,54,13.9,54,13.7z"></path></g><g><g fill="#ffffff"><path d="M25,14h-7v2h4.8c-0.7,3-2.9,5.5-5.8,6.5L5.5,11c1.2-3.5,4.6-6,8.5-6c3,0,5.7,1.5,7.4,3.8l1.5-1.3 C20.9,4.8,17.7,3,14,3C8.8,3,4.4,6.7,3.3,11.6l13.2,13.2C21.3,23.6,25,19.2,25,14z"></path><path d="M3,14.1c0,2.8,1.1,5.5,3.2,7.6c2.1,2.1,4.9,3.2,7.6,3.2L3,14.1z"></path></g><path d="M14,0C6.3,0,0,6.3,0,14s6.3,14,14,14s14-6.3,14-14S21.7,0,14,0z M6.2,21.8c-2.1-2.1-3.2-4.9-3.2-7.6L13.9,25 C11.1,24.9,8.3,23.9,6.2,21.8z M16.4,24.7L3.3,11.6C4.4,6.7,8.8,3,14,3c3.7,0,6.9,1.8,8.9,4.5l-1.5,1.3C19.7,6.5,17,5,14,5 c-3.9,0-7.2,2.5-8.5,6L17,22.5c2.9-1,5.1-3.5,5.8-6.5H18v-2h7C25,19.2,21.3,23.6,16.4,24.7z" fill="#663399"></path></g></svg>
                  
                 
              </div>
              <Typography variant="body2" className={classes.PaperText} color="textSecondary" component="p">
              It’s been 3 years since I have been working in Gatsby. It is a blazingly fast modern site generator for React. ( The website defines it this way ). What they mean is:

It is blazingly fast! Take my word, anyone who visits your website will go like Whoa!
It is a modern site generator: You can build websites using it
for React Yes, it works with React.
              </Typography>
              <Typography variant="body3" className={classes.PaperText} color="textSecondary" component="h4">The Technology I use in Gatsby Development are : </Typography>
             <div className={classes.buttonTag}>
             <Button className={classes.Button} variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/tailwindcss.svg" /> Tailwind css
              </Button>

              <Button className={classes.Button}  variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/graphql.svg" /> Graphql
              </Button>

              <Button className={classes.Button} variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/elephant.png" /> postgresql
              </Button>
             </div>
            <div>
              
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <div className={classes.header}>
              <img src="/images/laravel-2.svg" />
              <Typography className={classes.headerText} variant="caption" >Laravel</Typography>
              </div>
              <Typography variant="body2" className={classes.PaperText} color="textSecondary" component="p">
              It’s been 5 years since I have been working in Laravel. Laravel is a web application framework with expressive, elegant syntax.he most efficient and popular PHP framework known in the market for eliminating the pain out of development.
              </Typography>
              <Typography variant="body3" className={classes.PaperText} color="textSecondary" component="h4">The Technology I use in Gatsby Development are : </Typography>
             <div className={classes.buttonTag}>
             <Button className={classes.Button} variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/Bootstrap_logo.svg.png" /> Bootstrap
              </Button>

              <Button className={classes.Button}  variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/MySQL-Logo.wine.svg" /> My Sql
              </Button>

             
             </div>
            <div>
              
            </div>
          </Paper>
        </Grid>

        </Grid>
      </Container>
        </div>
    )
}
