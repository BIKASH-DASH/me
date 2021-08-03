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
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const drawerWidth = 215;

const useStyles = makeStyles((theme) => ({
  cardtitle:{
    textAlign:'left',
    padding:2,
    background:"#a43f49",
    color:"white"

  },
  Button:{
    padding:5,
  },
  tagImage:{
    height:23,
    paddingLeft:5
  },
    media:{
      height: 140,
    },
    buttonTag:{
      padding:5,
      display:'flex',
      justifyContent:"space-between"
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
  
export default function MyWork(props) {
    const classes = useStyles();
    return (
        <div>
             <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.AppBar}>
          <Toolbar>
            <Typography variant="h6" className='nevTitle' >My Work</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>

      <Grid container spacing={3}>    
      <Grid item xs={12} sm={6}>
    <Card className={classes.root}>
  
  <CardActionArea href="https://app.planforhealth.com/" >
  <Typography className={classes.cardtitle} color="textSecondary" gutterBottom>
  https://app.planforhealth.com/
    </Typography>
    <CardMedia
      className={classes.media}
      image="images/screencapture-planforhealth-2021-08-02-22_26_37.png"
      title="Foodzo"
      
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        <a src="https://app.planforhealth.com/" >Planforhealth</a>
      </Typography>
      <Typography variant="body2"  component="p">
      Our platform allows you to offer your patients a compelling alternative to dental insurance that raises your standard of care and team performance.
      </Typography>
      <div className={classes.buttonTag}>
             <Button className={classes.Button} variant="contained" color="inherit">
             <img className={classes.tagImage} src="/logo192.png" /> React
              </Button>

              <Button className={classes.Button}  variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/elephant.png" /> Postgresql
              </Button>

             
             </div>
    </CardContent>
  </CardActionArea>
  
</Card>
        </Grid>
      <Grid item xs={12} sm={6}>
      <Card className={classes.root}>
  
      <CardActionArea href="https://www.foodzo.in/" >
      <Typography className={classes.cardtitle} color="textSecondary" gutterBottom>
         https://www.foodzo.in/
        </Typography>
        <CardMedia
          className={classes.media}
          image="images/screencapture-foodzo-in-2021-08-02-21_26_23.png"
          title="Foodzo"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <a src="https://www.foodzo.in/" >Foodzo</a>
          </Typography>
          <Typography variant="body2"  component="p">
          Foodzo is an online food ordering platform in Bhubaneswar. Foodzo brings over 300 menu items to your doorstep. Free home delivery.We offer an efficient and professional service from ordering, delivery, presentation and to the quality of food.
          </Typography>
          <div className={classes.buttonTag}>
             <Button className={classes.Button} variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/cakephp-seeklogo.com.svg" /> Cakephp
              </Button>

              <Button className={classes.Button}  variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/MySQL-Logo.wine.svg" /> My Sql
              </Button>

             
             </div>
        </CardContent>
      </CardActionArea>
      
    </Card>

    </Grid>
    <Grid item xs={12} sm={6}>
    <Card className={classes.root}>
  
  <CardActionArea href="https://evaltechnology.com/" >
  <Typography className={classes.cardtitle} color="textSecondary" gutterBottom>
  https://evaltechnology.com/
    </Typography>
    <CardMedia
      className={classes.media}
      image="images/screencapture-evaltechnology-2021-08-02-22_14_09.png"
      title="Foodzo"
      
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        <a src="https://evaltechnology.com/" >Eval</a>
      </Typography>
      <Typography variant="body2"  component="p">
      Excite your consumers with 15 quiz, personality evaluation, and poll formats. Develop a quiz, subsequently qualify and segment brings predicated on quiz replies. Easy - no coding expected.
      </Typography>

      <div className={classes.buttonTag}>
             <Button className={classes.Button} variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/gatsby.png" /> Gatsby
              </Button>

              <Button className={classes.Button}  variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/elephant.png" /> Postgresql
              </Button>

             
             </div>
    </CardContent>
  </CardActionArea>
  
</Card>
        </Grid>

        <Grid item xs={12} sm={6}>
    <Card className={classes.root}>
  
  <CardActionArea href="http://www.manchesteroaksremodeling.com/" >
  <Typography className={classes.cardtitle} color="textSecondary" gutterBottom>
  http://www.manchesteroaksremodeling.com/
    </Typography>
    <CardMedia
      className={classes.media}
      image="images/screencapture-manchesteroaksremodeling-2021-08-02-23_07_25.png"
      title="Foodzo"
      
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        <a src="http://www.manchesteroaksremodeling.com/" >manchestero modeling</a>
      </Typography>
      <Typography variant="body2"  component="p">
      Looking for budget-friendly basement, kitchen or bathroom remodeling service in Atlanta? We are trusted for our flexibility &amp; on-time delivery of quality work.
      </Typography>
      <div className={classes.buttonTag}>
             <Button className={classes.Button} variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/laravel-seeklogo.com.svg" /> Laravel
              </Button>

              <Button className={classes.Button}  variant="contained" color="inherit">
             <img className={classes.tagImage} src="/images/MySQL-Logo.wine.svg" /> My Sql
              </Button>

             
             </div>
    </CardContent>
  </CardActionArea>
  
</Card>
        </Grid>
    </Grid>
      </Container>
        </div>
    )
}
