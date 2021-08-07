import React,{ useState, useCallback } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CertificateGrid from '../components/CertificateGrid'
import ImageViewer from 'react-simple-image-viewer';

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
    backgroundImage: "url(" + "//me/images/bgbikash-dash.jpg" + ")",
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

const CertificateGridData = [
  {
    title:"10th Certificate",
    img:"/me/images/10thbord s.jpg",
    desc:"school : panchayat high school sosahandi",
    passOut:"passed:2007"
  },
  {
    title:"+2 Bord Certificate",
    img:"/me/images/+2-bord.jpg",
    desc:"school : bhairaba mahavidyalaya borigumma",
    passOut:"passed:2009"
  },
  {
    title:"Bsc Bord Certificate",
    img:"/me/images/IMG_20180218_082720.jpg",
    desc:"University : Kuvempu University Karnataka",
    passOut:"passed:2013"
  },
  {
    title:"GNIIT Certificate",
    img:"/me/images/gniit.jpg",
    desc:"University : NIIT",
    passOut:"passed:2014"
  },
  {
    title:"Permanent Account Number",
    img:"/me/images/0001.jpg",
    desc:"Govt of India",
  },
  {
    title:"Aadhar card",
    img:"/me/images/Aadhaar-1.jpg",
    desc:"Govt of India",
  },

]



export default function Certificate(props) {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const images = CertificateGridData.map((data)=>data.img) ;

  const showImages = (indexInput)=>{
    console.log(indexInput);
    openImageViewer(indexInput)
  }


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
        

          
          <CertificateGrid handelClick={showImages} gridData={CertificateGridData}/>

          {isViewerOpen && (
              <ImageViewer
                src={ images }
                currentIndex={ currentImage }
                disableScroll={ false }
                onClose={ closeImageViewer }
              />
            )}

      </Container>
    </div>
  )
}
