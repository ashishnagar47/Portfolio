import React from 'react'
import {Typography,Avatar,Grid,Box} from "@material-ui/core"
import Typed from 'react-typed'
import avatar from '../media/c.png'
import {makeStyles} from '@material-ui/core/styles'

//CSS STYLES
const usestyles=makeStyles(theme=>({
    avatar:{
        width:theme.spacing(25),
        height:theme.spacing(25),
        margin:theme.spacing(1)
    },
    title:{
        color:'tomato'
    },
    subtitle:{
        color:"tan",
        marginBottom:"3rem"
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        textAlign:"center",
        width:"100vh",
        zIndex:1
    }
}))

export default function header() {
    const classes=usestyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
             <Avatar className={classes.avatar} src={avatar} alt="Ashish" />
            </Grid>
            
            <Typography className={classes.title} variant="h4" >
                <Typed strings={["Ashish Kumar Nagar"]} typeSpeed={40}></Typed>
            </Typography>
            <br></br>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings=
                {["Web Design","Web Development","MERN Stack"]} 
                typeSpeed={40} 
                backSpeed={50}
                loop
                ></Typed>
            </Typography>
        </Box>
    )
}
