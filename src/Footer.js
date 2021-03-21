import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import React, { Component } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Data from './Data.json' 
import styles from './styles'



const useStyles = makeStyles((theme: theme) =>
createStyles({
  mainHeader:{
      width:'100%',
      backgroundColor:'#a4c3c12e',
      padding:'100px 0',
  },
  footerCol:{
      margin:'10px',
  },
  footerMenuList:{
      padding:0,
  },
  footerImage:{
      width: '173px',
      height: 'auto',
  },
  footerItemlist:{
      listStyle:'none',
  },
  footerItem:{
      color: 'dimgrey',
      lineHeight: '32px',
      margin: 0,
      padding: 0,
      fontFamily:"'Rubik', sans-serif",
      [theme.breakpoints.down('sm')]: {
          backgroundColor: 'red',
      },
  }
}),
);




export default function Footer(props) {
    let { title } = props;
    const classes = useStyles();  
        return (
            <div className={classes.mainHeader}>
                <Container>
                <Grid container>
                    <Grid item xs={3}>
                    <div className={classes.footerCol}>
                            <img className={classes.footerImage} src="https://radiustheme.com/demo/wordpress/themes/digeco/wp-content/uploads/2020/03/logo.png"/>
                            <p className={classes.title}>Grursus mal suada faci Lorem to the ipsum dolarorit more ametion more consectetur elit.</p>
                            <FacebookIcon className={classes.faceIcon}/>
                            <TwitterIcon className={classes.twiIcon}/>
                       </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.footerCol}>
                            <h2 className={classes.footerCOlHeading}>Our Services</h2>
                            <div>
                                <ul className={classes.footerMenuList}>
                                {Data.footerListItem.map((item, index) => 
                                    <li className={classes.footerItemlist} key={index}>
                                        <a className={classes.footerItem} href="#"><NavigateNextIcon /> {item}</a>
                                    </li>
                                )}
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                         <div className={classes.footerCol}>
                            <h2 className={classes.footerCOlHeading}>Importact Link</h2>
                          
                                <div>
                                    <ul className={classes.footerMenuList}>
                                    {Data.footerlistitemdata.map((item, index) => 
                                          <li className={classes.footerItemlist} key={index}>
                                             <a className={classes.footerItem} href="#"><NavigateNextIcon /> {item}</a>
                                          </li>
                                    )}
                                    </ul>
                                </div>
                          </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.footerCol}>
                            <h1>Contact info</h1>
                            <p>Grursus mal suada faci lisis Lorem to ipsum consectetur.</p>
                            <u>
                                <li>113 Sassnex, White House, New Jercy, USA</li>
                                <li>+001-548-159-2491</li>
                                <li>info@yourdomain.com</li>
                            </u>
                        </div>
                     </Grid>
                </Grid>
            </Container>
            </div>
        )
}
