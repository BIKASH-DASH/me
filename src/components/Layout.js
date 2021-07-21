import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';


const drawerWidth = 215;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
    }
}));

export default function Layout({ children }, ...props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                color="#a43f49"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >   <div className={classes.toolbar} >
                <Avatar alt="Remy Sharp" src="/images/bikashImages.jpg" className={classes.large} />
                </div>
                <Typography color="primary" variant="h5" noWrap>
                    BIKASH DASH
                </Typography>
                <Typography color="primary" variant="caption" gutterBottom>
                    MERN Stack Developer
                </Typography>
                <Divider />
                <List>
                    {['About Me', 'What I’m good at', 'My Work', 'Contact Me', 'Resume'].map((text, index) => (
                        <ListItem  className={classes.listItem} button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}