import React from 'react';

// core material-ui
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Grid, Typography, Box, AppBar } from '@material-ui/core'

// toolbar
import Toolbar from '@material-ui/core/Toolbar';
import LinearProgress from '@material-ui/core/LinearProgress';

// icons
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

// react-player 
import ReactPlayer from 'react-player'

// components
// import Controller from './components/Controller'
import NavMenu from './components/Navmenu'
// import Player from './components/Player'
import Playlist from './components/Playlist'

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      played: 0,
      duration: 0,
      isPlaying: false,
      currentlyPlaying: 'QdyOV1G3jv4',
      trackTitle: 'Track Title'
    }

    this.playerRef = React.createRef();
  }

  handlePlayPause = () => {
    let title = this.player.getInternalPlayer().playerInfo.videoData.title;
    this.setState({ isPlaying: !this.state.isPlaying,  trackTitle: title});
    console.log("played: " + this.state.played * 100)
    console.log("duration: " + this.state.duration)
    console.log(this.state.played / this.state.duration)
  }
  
  handleDuration = (duration) => {
    this.setState({ duration })
  }

  handleProgress = state => {
    this.setState({ played: state.played })
  }

  ref = player => {
    this.player = player;
  }

  render(){
    const niceTheme = createMuiTheme({
      palette : {
        primary: {
          main: "#3c4f65"
        }
      },
      spacing: 8,
    });

    const bottomBarStyle = {
      top: 'auto',
      bottom: 0,
      opacity: 0.98,
      overflow: 'hidden', 
      textOverflow: 'ellipsis', 
      whitespace: 'nowrap',
    }

    const iconStyle = {
        padding: '10px',
        cursor: 'pointer'
    }

  return (
    // TODO:
    // modify 'grid xs' to use standard values for xs, md, sm, etc
    // remove react-player vh: 45 after
    <ThemeProvider theme={niceTheme}>
      <Grid container style={{backgroundColor: '#33313b'}}>
        <Grid container direction='row' justify="center">
            <Grid item xs>

              <Grid container direction='column'>
                <Grid item style={{margin: '20px 0px 0px 20px', color: 'white'}}>
                  <Typography variant='h6'>coverlist</Typography>
                </Grid>

                <Grid item xs style={{margin: '20px'}}>
                  <NavMenu />
                </Grid>

                <Grid item xs style={{ margin: '0px 20px 20px 20px' }}>
                  {/* <Player /> */}
                  <Box boxShadow={10} style={{ height: '50vh' }}>
                    <ReactPlayer 
                      ref={this.ref}
                      width='100%'
                      height='100%'
                      url={'https://www.youtube.com/watch?v=' + this.state.currentlyPlaying}
                      playing={this.state.isPlaying}
                      // onPlay={this.handlePlayPause}
                      // onPause={this.handlePlayPause}
                      onDuration={this.handleDuration}
                      onProgress={this.handleProgress}
                    />
                  </Box>
                </Grid>

              </Grid>
            </Grid>

            <Grid item xs>
              <Grid container direction='column'>
                <Grid item xs>
                  <Playlist />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item>
            <AppBar style={bottomBarStyle}>
                <Toolbar>
                    <Grid container direction='row' alignItems='center'>
                            <SkipPreviousIcon style={iconStyle} fontSize='large'/>
                            { !this.state.isPlaying ? <PlayCircleFilledIcon onClick={() => this.handlePlayPause()} style={iconStyle} fontSize='large'/>
                                : <PauseCircleFilledIcon onClick={() => this.handlePlayPause()} style={iconStyle} fontSize='large'/>
                            }
                            <SkipNextIcon style={iconStyle} fontSize='large' />
                            <VolumeUpIcon style={iconStyle} fontSize='large' />
                            <Typography style={{padding: '10px', width: '50vw'}} variant='h6' noWrap={true}>{this.state.trackTitle}</Typography>
                            <LinearProgress style={{width: '100%', marginBottom: '8px'}} variant="determinate" color="secondary" value={this.state.played * 100} />
                    </Grid>
                </Toolbar>
            </AppBar>
          </Grid>

          </Grid>
    </ThemeProvider>
    );
  }
}

export default App;
