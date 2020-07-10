import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography,Box} from '@material-ui/core'
import Navbar from './Navbar'


//CSS STYLES
const useStyle=makeStyles(theme=>({
    mainContainer:{
        background:"#233",
        
    },
    timeLine:{
        position:"relative",
        padding:"1 rem",
        margin:"0 auto",
        "&:before":{
            content:"''",
            position:'absolute',
            height:"100%",
            border:" 1px solid tan",
            right:"40px",
            top:0
        },
        "&:after":{
           content:"''",
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left:"calc(50% - 1px)",
                right:"auto"
            }
        }
    },
    timeLineItem:{
        padding:"1rem",
        borderBottom:"2px solid tan",
        position:"relative  ",
        margin:"1rem 3rem 1rem 1rem",
        clear:"both",
        "&:after":{
            content:"''",
            position:"absolute"
        },
        "&:before":{
            content:"''",
            position:"absolute",
            right:"-0.625rem",
            top:"calc(50% - 5px)",
            borderStyle:"solid",
            borderColor:"tomato tomato transparent transparent",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)" 
        },
        [theme.breakpoints.up("md")]:{
            width:"44%",
            margin:"1rem",
            "&:nth-of-type(2n)":{
                float:"right",
                margin:"1rem",
                borderColor:"tan"
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left:"-0.625rem ",
                borderColor:"transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear:{
        textAlign:"center",
        maxWidth:"9.35rem",
        margin:"0 3rem 0 auto",
        fontSize:"1.8rem",
        background:"tomato",
        color:"white",
        lineHeight:1,
        padding:"0.5rem 0 1rem",
        "&:before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before":{
                display:"none"
            }
        }
    },
    heading:{
        color:"tomato",
        padding:"3rem 0",
        fontSize:"3rem",
        textTransform:"uppercase"
    },
    subHeading:{
        color:"white",
        padding:"0",
        textTransform:"uppercase"
    }
    
}))

export default function Resume() {
    const classes=useStyle()
    return (
        <>
            <Navbar></Navbar>
            <Box component="header" className={classes.mainContainer}>
                <Typography varient="h1" className={classes.heading}  align="center">
                    Trainings
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography varient="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                            2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography varient="h5" align="center" className={classes.subHeading}>
                                Internet of Things
                        </Typography>
                        <Typography varient="body1" align="center" style={{color:"tomato"}}>
                                Sofcon India Pvt. Ltd.
                        </Typography>
                        <Typography varient="subtitle1" align="center" style={{color:"tan"}}>
                            I have done 2 weeks training on Internet of Things from Sofcon India Pvt. Ltd. where I learned 
                            about microcontrollers, arduino, raspberry, embedded system etc
                        </Typography>
                        
                    </Box>
                    <Typography varient="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                            2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography varient="h5" align="center" className={classes.subHeading}>
                                Mobile Technology
                        </Typography>
                        <Typography varient="body1" align="center" style={{color:"tomato"}}>
                                M.T.N.L
                        </Typography>
                        <Typography varient="subtitle1" align="center" style={{color:"tan"}}>
                                I have done 6 weeks training on Mobile Technology from M.T.N.L where I learned about 
                                wireless communication, and wired communication, and how communication system works.
                        </Typography>

                    </Box>
                    <Typography varient="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                            2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography varient="h5" align="center" className={classes.subHeading}>
                                Industrial Training
                        </Typography>
                        <Typography varient="body1" align="center" style={{color:"tomato"}}>
                                Coding Blocks
                        </Typography>
                        <Typography varient="subtitle1" align="center" style={{color:"tan"}}>
                                I have done 6 months Industrial Training from Coding Blocks where I learned JAVA(DS & Algo) and
                                Full Stack Web-Development and made various projects in it.
                        </Typography>
                        
                    </Box>
                </Box>
            </Box>
        </>
    )
}
