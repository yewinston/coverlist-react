import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import Controller from './components/Controller'
import NavMenu from './components/Navmenu'
import Player from './components/Player'
import Playlist from './components/Playlist'

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }

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

    return (
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

                  <Grid item xs style={{margin: '0px 20px 20px 20px'}}>
                    <Player />
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
              <Controller />
            </Grid>

          </Grid>
      </ThemeProvider>
    );
  }
}

export default App;
