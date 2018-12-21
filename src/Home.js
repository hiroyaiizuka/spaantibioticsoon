import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from 'react-router-dom';





function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
   <div style = {{ margin: 'auto',}}>
     <Card className={classes.card}>
        <CardContent>
        <CardHeader
          title="肺炎"
          subheader="罹患場所により、分類される"
        />
        <CardMedia
                  className={classes.media}
                  image="/hap.jpeg"
                  title="pneumonia"
                />
            <Typography style = {{ fontSize: 11, color: '#909090', marginTop: 15, }}>市中肺炎では、非定型肺炎の検討<br/>医療介護関連肺炎と院内肺炎は、耐性菌の検討が必要</Typography>

        </CardContent>
      </Card>
    </div>

      {images.map(image => (
        <ButtonBase
          focusRipple
          component = {Link}
          to = {image.path}
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "20%", margin: "auto", height: 120
          }}
        >
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            > 
                {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}

   <div style = {{ margin: 'auto', marginTop: 100}}>
     <Card className={classes.card}>
        <CardContent>
          <CardHeader
            title="尿路感染症"
            subheader="基礎疾患の有無で、分類される"
          />
        <CardMedia
                  className={classes.media}
                  image="/complex.jpeg"
                  title="uti"
                />
            <Typography style = {{  fontSize: 11, color: '#909090', marginTop: 20}}>単純性:<br/>若年女性<br/><br/> 複雑性: <br/>高齢男性、糖尿病患者、尿道カテーテル留置中<br/>下部尿路通過障害 (前立腺肥大症、結石、癌)<br/>妊婦、先天性奇形など</Typography>

        </CardContent>
      </Card>
    </div>


  {images2.map(image => (
        <ButtonBase
          focusRipple
          component = {Link}
          to = {image.path}
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "30%", margin: "auto", height: 120
          }}
        >
          <span
            className={classes.imageSrc}
           
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            > 
                {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}

    </div>
  );
}


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    marginTop: 100
  },
  image: {
    position: 'relative',
    height: 310,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'red',
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 25,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  card: {
    marginTop:20,
    marginBottom: 40,
    width: 300,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const images = [
  {
    title: '市中肺炎',
    path: '/capsevererity',
    width: '30%',
  },
  {
    title: '医療介護関連肺炎',
    path: '/nhcapsevererity',
    width: '40%',
  },
  {
    title: '院内肺炎',
    path: '/hapsevererity',
    width: '30%',
  },
];

const images2 = [
  {

    title: '単純性尿路感染症',
    path: '/simple',
    width: '50%',
  },
  {

    title: '複雑性尿路感染',
    path: '/complex',
    width: '50%',
  },

];

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);