import React,{useState} from 'react'
import {AppBar,Toolbar,ListItem,ListItemIcon,IconButton,ListItemText,Avatar,Divider,List,Typography,Box} from "@material-ui/core"
import {Menu,AssignmentInd,Home,Apps,ContactMail} from "@material-ui/icons"
import { makeStyles} from "@material-ui/styles"
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import {Link} from "react-router-dom"
import Image from '../media/c.png'
import Footer from './Footer'
// CSS STYLES
const useStyles=makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height:"100%"
    },
    
    avatar:{
         display:"block",
         margin: "0.5rem auto",
          width:"130px",
          height: "130px"  
    },
    listIcon:{
        color:"tan"
    },
    listText:{
        color:"tan"
    }
}))

const menuItems=[
    {
        listIcon: <Home></Home>,
        listText: "Home",
        listPath:"/"
    },
    {
        listIcon: <AssignmentInd></AssignmentInd>,
        listText: "Resume",
        listPath:"/resume"
    },
    {
        listIcon: <Apps></Apps>,
        listText: "Portfolio",
        listPath:"/portfolio"
    },
    {
        listIcon: <ContactMail></ContactMail>,
        listText: "Contacts",
        listPath: "/contact"
    }
]

 const Navbar =()=>{
     const [state,setState]=useState({
         right:false
     })

     const toggleSlider=((slider,open)=>()=>{
         setState({...state,[slider]:open})
     })
        const classes=useStyles()

        const sidelist=slider=>(
            <Box component="div" className={classes.menuSliderContainer} onClick={toggleSlider(slider,false)}>
                    <Avatar src={Image} className={classes.avatar} alt="Ashish"></Avatar>
                    <Divider></Divider>
                    <List>
                        {menuItems.map((lstItem,key)=>(
                        <ListItem button key={key} component={Link} to={lstItem.listPath}> 
                            <ListItemIcon className={classes.listIcon} >{lstItem.listIcon}</ListItemIcon>
                            <ListItemText className={classes.listText}  primary ={lstItem.listText}></ListItemText>
                        </ListItem>
                        ))}
                    </List>
                </Box>
        )
        return (
            <>
                
                <Box component="nav">
                    <AppBar position="static" style={{background:"#222"}}>
                        <Toolbar>
                            <IconButton onClick={toggleSlider("right",true)}>
                            <Menu style={{color:"tomato"}}></Menu>
                            </IconButton>
                            <Typography variant="h5" style={{color:"tan"}}>
                                        Portfolio
                                </Typography>
                                <MobileRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right",false)}>
                                    {sidelist("right")}
                                    <Footer></Footer>
                                </MobileRightMenuSlider>
                        </Toolbar>
                    </AppBar>
                </Box>
           </> 
        )
    }


export default Navbar
