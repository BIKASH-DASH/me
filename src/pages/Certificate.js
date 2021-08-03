import React from 'react'
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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import CardMedia from '@material-ui/core/CardMedia';
const drawerWidth = 215;

const useStyles = makeStyles((theme) => ({
  media:{
    height: 340,
  },
    title:{
      textAlign:'left',
      padding:2,
      background:"#a43f49",
      color:"white" 
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
  
export default function Certificate(props) {
    const classes = useStyles();
    return (
        <div>
             <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.AppBar}>
          <Toolbar>
            <Typography variant="h6" className='nevTitle' >Certificate</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
      <Grid container spacing={3}>
       
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          10th Certificate
        </Typography>
        <CardMedia
      className={classes.media}
      image="images/10thbord s.jpg"
      title="Foodzo"
      
    />
        <Typography className={classes.pos} color="textSecondary">
          passed:2007
        </Typography>
        <Typography variant="body2" component="p">
          school : panchayat high school sosahandi
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
         <a href=""><GetAppIcon/></a>
      </CardActions>
    </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          +2 Bord Certificate
        </Typography>
        <CardMedia
      className={classes.media}
      image="images/+2-bord.jpg"
      title="Foodzo"
      
    />
        <Typography className={classes.pos} color="textSecondary">
          passed:2009
        </Typography>
        <Typography variant="body2" component="p">
        college : bhairaba mahavidyalaya borigumma
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
         <a href=""><GetAppIcon/></a>
      </CardActions>
    </Card>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Bsc Bord Certificate
        </Typography>
        <CardMedia
      className={classes.media}
      image="images/IMG_20180218_082720.jpg"
      title="Foodzo"
      
    />
        <Typography className={classes.pos} color="textSecondary">
          passed:2013
        </Typography>
        <Typography variant="body2" component="p">
        University : Kuvempu University Karnataka
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
         <a href=""><GetAppIcon/></a>
      </CardActions>
    </Card>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          GNIIT Certificate
        </Typography>
        <CardMedia
      className={classes.media}
      image="images/gniit.jpg"
      title="Foodzo"
      
    />
        <Typography className={classes.pos} color="textSecondary">
          passed:2014
        </Typography>
        <Typography variant="body2" component="p">
        University : NIIT
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
         <a href=""><GetAppIcon/></a>
      </CardActions>
    </Card>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Permanent Account Number
        </Typography>
        <CardMedia
      className={classes.media}
      image="images/0001.jpg"
      title="Foodzo"
      
    />
        <Typography variant="body2" component="p">
        Govt of India
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
         <a href=""><GetAppIcon/></a>
      </CardActions>
    </Card>
          </Paper>
        </Grid>
        
      </Grid>
      </Container>
        </div>
    )
}
