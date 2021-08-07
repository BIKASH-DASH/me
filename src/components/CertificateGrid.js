import React from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GetAppIcon from '@material-ui/icons/GetApp';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const drawerWidth = 215;
const useStyles = makeStyles((theme) => ({
    media: {
      height: 340,
    },
    title: {
      textAlign: 'left',
      padding: 2,
      background: "#a43f49",
      color: "white"
    },
    social: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 5
    },
    aboutme: {
      textAlign: 'left'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paperContainer: {
      backgroundImage: "url(" + "me/images/bgbikash-dash.jpg" + ")",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 250,
      backgroundSize: [239, 297],
      paddingTop: 268
    },
    AppBar: {
      left: drawerWidth,
      background: "#a43f49",
      color: 'white',
    }
  }));
  
export default function CertificateGrid(props) {
    const {gridData,handelClick} = props;
    const classes = useStyles();
    console.log('....gridData',gridData);
    return (
        <Grid container spacing={3}>
            {gridData.map((info,index)=>{
                return(<Grid key={index} item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                      <Card className={classes.root} variant="outlined">
                        <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {info.title}
                          </Typography>
                          <CardMedia
                            className={classes.media}
                            image={info.img}
                            title={classes.title}
                            onClick={ () => handelClick(index) }
        
                          />
                          <Typography className={classes.pos} color="textSecondary">
                            {info.passOut}
                          </Typography>
                          <Typography variant="body2" component="p">
                          {info.desc}
                            <br />
        
                          </Typography>
                        </CardContent>
                        <CardActions>
                        <Link to={info.img} target="_blank" download><GetAppIcon /></Link>
                         
                        </CardActions>
                      </Card>
                    </Paper>
                  </Grid>);
            })}
        
          </Grid>
    )
}
