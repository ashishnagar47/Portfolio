import React from 'react'
import Navbar from './Navbar'
import {makeStyles} from '@material-ui/core/styles'
import {TextField,Typography,Button,Grid,Box} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { withStyles } from '@material-ui/styles'

const useStyles= makeStyles(theme=>({
    form:{
        top:"50%",
        left:"50%",
        transform: "translate(-50%,-50%)",
        position:"absolute"
    },
    button:{
        marginTop:"1rem",
        color:"tomato",
        borderColor:"tomato",
        //backgroundColor:"black"
    }
}))


const InputField=withStyles  ({
    root:{
        "& label.Mui-focused":{
            color:"tomato", 
            
        },
        "& label":{
            color:"tan",
            
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"tan",
            },
            "&:hover fieldset":{
                borderColor:"tan",
                
            },
            "&.Mui-focused fieldset":{
                borderColor:"tan"
            },
        },
    },
})(TextField)

function Contacts() {
    const classes=useStyles()
    return (
        <Box component="div" style={{background:"#233", height:"100vh"}}>
           <Navbar></Navbar>
           <Grid container justify="center">
               <Box component="form" className={classes.form}>
                    <Typography varient="h5" style={{color:"tomato", textAlign:"center", textTransform:"uppercase"}}>
                        hire or contact me...
                    </Typography>
                    <InputField varient="outlined" fullWidth={true} label="Name" inputProps={{style:{color:"white"}}} margin="dense" size="medium"></InputField>
                    <br></br>
                    <InputField varient="outlined" fullWidth={true} label="Email" inputProps={{style:{color:"white"}}} margin="dense" size="medium" ></InputField>
                    <br></br>
                    <InputField varient="outlined" fullWidth={true} label="Comapany Name"  inputProps={{style:{color:"white"}}} margin="dense" size="medium" ></InputField>
                    <br></br>
                    <Button variant="outlined" className={classes.button} fullWidth={true} endIcon={<SendIcon></SendIcon>}>
                        contact me
                    </Button>
               </Box>
            </Grid> 
           
        </Box>
    )
}

export default Contacts
