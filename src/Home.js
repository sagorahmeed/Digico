import React from 'react'
import Container from '@material-ui/core/Container'
import Navbar from './Navbar'
import Footer from './Footer'
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Data from './Data.json'
import useStyles from './styles';




export default function Home(props) {
    const {items} = props;
    const classes = useStyles();  
    return(
        <>
       <div>
       <Navbar />
           <div className={classes.header}>
                <Container fixed>
                    <div>
                        <div className={classes.headerBlog}>
                            <div className={classes.singleBlog}>
                                <div className={classes.blogDesc}>
                                    <h4 className={classes.blogHeader}>It Design & Consulting</h4>
                                    <h1 className={classes.blogHeading}>Our Intelligent Technology Solutions and Services</h1>
                                    <p className={classes.blogTitle}>Grursus mal suada faci lisis lorem ipsam dolarshit ametion the consectetur nec odio aea the dumm text.</p>
                                </div>
                                <div className={classes.blogServiceInfo}>
                                  <button className={classes.blogButton}>Our Services</button>
                                    <div className={classes.blogVideoInfo}>
                                        <PlayArrowIcon className={classes.videoButton}/>
                                        <span className={classes.videoTitle}>Watch Video</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.imageBlog}>
                                <div>
                                    <img className="singleBlogImage" src={"https://radiustheme.com/demo/wordpress/themes/digeco/wp-content/uploads/2020/02/illustration1.png"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
           </div>
           <Container>
              <div>   
                  <div className={classes.techMainHeader}>
                      <div className={classes.technologySolutionImageBlog}>
                          <div className={classes.imageBLog}>
                              <img className='technologyImage' src={"https://radiustheme.com/demo/wordpress/themes/digeco/wp-content/uploads/2020/01/about2.png"}/>
                          </div>
                      </div>
                      <div className={classes.technologySolutiontitleBlog}>
                          <div className={classes.technologyTitle}>
                              <h1 className={classes.heading}>Exclusive Agency For Technology Provide Soluation</h1>
                              <p className={classes.title}>Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum dolocons is suada a and fadolorit to the consectetur elit.</p>
                              <ul className={classes.techListitem}>
                                  {Data.technologySolution.map((items,index) =>
                                    <li className={classes.techItem} key={index}>{items}</li>
                                  )}
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>       
           </Container>
           <Footer/>
       </div>
       </>
    );
}