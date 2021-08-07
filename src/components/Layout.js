import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon'
import AboutUs from '../pages/AboutUs'
import WhatImGoodAt from '../pages/WhatImGoodAt'
import MyWork from '../pages/MyWork'
import Resume from '../pages/Resume'
import Certificate from '../pages/Certificate'
import ContactMe from '../pages/ContactMe'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const drawerWidth = 215;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        cursor:'default'
        
    },
    menuIcon:{
        position: 'relative',
        top: '4px'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#a43f49"
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    listItem:{
        borderBottom:"2px solid #fff",
        color:"#fff"
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    large:{
        width: 140,
        height:140,
        borderRadius:'50%',
        textAlign:'center',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:23,
    },
    listItemLink:{
        display: 'flex',
        color: 'white',
        textDecoration: 'none',
        textAlign: 'center'
    }
}));

const navMenuItem =  [  
                        {
                            'title':'About Me',
                            'link':'/',
                            'icon':'personIcon',
                        },
                        {
                            'title':'What I’m good at',
                            'link':'what-i-am-good-at',
                            'icon':'code',
                        },                        
                        {
                            'title':'My Work',
                            'link':'my-work',
                            'icon':'work',
                        },                        
                        {
                            'title':'Contact Me',
                            'link':'contact-me',
                            'icon':'contacts',
                        },                                               
                        {
                            'title':'Certificate',
                            'link':'certificate',
                            'icon':'apps',
                        },                                            
                        {
                            'title':'Resume',
                            'link':'resume',
                            'icon':'description',
                        },

                    ];


export default function Layout({ children }, ...props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Router>
            <CssBaseline />
           
            <Drawer
                className={classes.drawer}
                variant="permanent"
                color="#a43f49"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >   <div className={classes.toolbar} >
                <Avatar alt="Remy Sharp" src="/me/images/bikashImages.jpg" className={classes.large} />
                </div>
                <Typography color="primary" variant="h5" noWrap>
                    BIKASH DASH
                </Typography>
                <Typography color="primary" variant="caption" gutterBottom>
                    MERN Stack Developer
                </Typography>
                <Divider />
                <List>
                    {navMenuItem.map((NavMenu, index) => (
                        <ListItem  className={classes.listItem} button key={NavMenu.title}>
                            <Link className={classes.listItemLink} to={NavMenu.link}>
                                <ListItemIcon className={classes.menuIcon} >
                                    <Icon>{NavMenu.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={NavMenu.title} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                
      <div>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
        <Switch>
          <Route  path="/" component={AboutUs} />
          <Route exact path="/me/what-i-am-good-at" component={WhatImGoodAt} />
          <Route exact path="/me/my-work" component={MyWork} />
          <Route exact path="/me/contact-me" component={ContactMe} />
          <Route exact path="/me/certificate" component={Certificate} />
          <Route exact path="/me/resume" component={Resume} />

     
        </Switch>
      </div>
 
            </main>

            </Router>
        </div>
    );
}