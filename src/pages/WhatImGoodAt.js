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
      color:"white",
      paddingLeft:2,
      fontSize:18,
      marginTop:'-2px'
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
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>

        </Grid>
      </Container>
        </div>
    )
}
