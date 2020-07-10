import React from 'react'
import Navbar from './Navbar'
import {Box,Grid,Card, CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import project1 from '../ecommerce-768x278.jpg'


//CSS STYLES
const useStyles=makeStyles({
    mainContainer:{
    backgorund:"#233",
    height:"100%"
    },
    cardContainer:{
        maxWidth:545,
        margin:"3rem",
        margin:"5rem auto"
    }
})

function Portfolio() {
    const classes=useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar></Navbar>
            <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 1" height="140" image={project1}>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    E-Commerce Site
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    I have build a Frontend and Backend web application for E-Commerce Site.
                                    Technologies used in it are NodeJS,ExpressJS,MySQL. And used Auth O for 
                                    user Authentication.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://github.com/ashishnagar47/E_Commerce_Project" size="small" color="primary">
                                    Github Code
                                </Button>
                                <Button href="https://e-comm47.herokuapp.com/" size="small" color="primary">
                                    Visit Site
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>

                {/* Project 2 */}
                {/* <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 1" height="140" image={project1}>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                I have done 6 weeks training on Mobile Technology from M.T.N.L where I learned about 
                                wireless communication, and wired communication, and how communication system works.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid> */}
            </Grid>
        </Box>
    )
}

export default Portfolio
