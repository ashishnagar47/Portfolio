import React, { Component } from 'react'
import Navbar from './Navbar'
import Header from './header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'

const useStyles=makeStyles({
    particlesCanva:{
        position: "absolute",
        opacity:0.5
    }
})

 const Index =()=> {
    const classes=useStyles()
        return (
            <div>
                <Navbar></Navbar>
                <Header></Header>
                <Particles
                    canvasClassName={classes.particlesCanva}
                    params={{
                        
                        particles:{
                            number:{
                                value:45,
                                density:{
                                    enable:false,
                                    value_area:900
                                }
                            },
                            shape:{
                                type:'circle',
                                stroke:{
                                    width:1,
                                    color:"tomato"
                                }
                            },
                            size:{
                                value:8,
                                random:true,
                                anim:{
                                    enable:true,
                                    speed:6,
                                    size_min:0.1,
                                    sync:true
                                }
                            },
                            opacity:{
                                value:1,
                                random:true,
                                anim:{
                                    enable:true,
                                    speed:1,
                                    opacity_min:0.1,
                                    sync:true
                                }
                            }
                        }
                    }}
                ></Particles>
            </div>
        )
    }


export default Index
