import React from 'react';
// import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core'

class Player extends React.Component{
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        const cardStyle = {
            width: '100%',
            height: '40vh',
            backgroundColor: 'white'
        }

        return(
            <Box boxShadow={10} style={cardStyle}>

            </Box>
        )
    }
}


export default Player