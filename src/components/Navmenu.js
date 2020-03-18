import React from 'react';
// import { Grid, Typography } from '@material-ui/core';
import { Box } from '@material-ui/core'

import Navplaylists from './navComponents/nav-playlists';
import Navdiscover from './navComponents/nav-discover';
import Navsearch from './navComponents/nav-search';

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import SearchIcon from '@material-ui/icons/Search';
import HearingIcon from '@material-ui/icons/Hearing';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

class NavMenu extends React.Component{
    constructor(){
        super()

        this.handlePanel = this.handlePanel.bind(this);

        this.state = {
            currentPanel: 'Playlists'
        }
    }

    handlePanel(event, newValue){
        this.setState({currentPanel: newValue})
        console.log(this.state.currentPanel);
    }

    render(){
        const cardStyle = {
            width: '100%',
            height: '290px',
            maxHeight: '290px',
            backgroundColor: 'white'
        }

        const bottomBarStyle = {
            maxWidth: 'none'
        }

        return(
            <Box boxShadow={10} style={cardStyle}>
                {this.state.currentPanel === 'Playlists' ? <Navplaylists />
                    : this.state.currentPanel === 'Discover' ? <Navdiscover />
                        : <Navsearch />
                }

                <BottomNavigation  onChange={this.handlePanel} value={this.state.currentPanel}>
                    <BottomNavigationAction style={bottomBarStyle} value='Playlists' label="Playlists" icon={<QueueMusicIcon />} />
                    <BottomNavigationAction style={bottomBarStyle} value='Discover' label="Discover" icon={<HearingIcon />} />
                    <BottomNavigationAction style={bottomBarStyle} value='Search' label="Search" icon={<SearchIcon />} />
                </BottomNavigation>
            </Box>
        )
    }
}

export default NavMenu;