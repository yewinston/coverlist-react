import React from 'react';
import { Grid } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {LinearProgress, PlayCircleFilledIcon, PauseCircleFilledIcon, PauseCircleFilledIcon, SkipNextIcon, SkipPreviousIcon, VolumeUpIcon} from '@material-ui/icons';


class Controller extends React.Component {
    constructor(props){
        super();
        this.state = {
            playing: props.playerState.isPlaying
        }
    }
    

    handleClick(){
        // this.setState({playing: !this.state.playing})
        console.log(this.state)
    }

    render(){

        const bottomBarStyle = {
            top: 'auto',
            bottom: 0,
            opacity: 0.98
        }

        const iconStyle = {
            padding: '10px',
            cursor: 'pointer'
        }

        return(
            <AppBar style={bottomBarStyle}>
                <Toolbar>
                    <Grid container direction='row' alignItems='center'>
                            <SkipPreviousIcon style={iconStyle} fontSize='large'/>
                            { !this.state.playing ? <PlayCircleFilledIcon onClick={() =>this.handleClick()} style={iconStyle} fontSize='large'/>
                                : <PauseCircleFilledIcon onClick={() =>this.handleClick()} style={iconStyle} fontSize='large'/>
                            }
                            <SkipNextIcon style={iconStyle} fontSize='large' />
                            <VolumeUpIcon style={iconStyle} fontSize='large' />
                            <Typography variant='h6' style={iconStyle}>Track Title</Typography>
                            <LinearProgress style={{width: '100%', marginBottom: '8px'}} variant="determinate" color="secondary" value={25} />
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Controller
