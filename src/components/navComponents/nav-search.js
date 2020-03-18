import React from 'react';
import { Grid } from '@material-ui/core';
// import { Box } from '@material-ui/core'

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';


class Navsearch extends React.Component{
    constructor(){
        super()

        // Binds for functions that change state
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
        this.handleSearchFieldSwitch = this.handleSearchFieldSwitch.bind(this);

        this.state = {
            searchMenuOpen: false,
            searchMenuAnchor: undefined,
            searchFieldTarget: 'YouTube'
        }
    }
    
    handleMenuClick(event){
        this.setState({
            searchMenuOpen: true,
            searchMenuAnchor: event.currentTarget
        });
    }

    handleMenuClose(){
        this.setState({
            searchMenuOpen: false,
            searchMenuAnchor: undefined
        });
    }

    handleSearchFieldSwitch(target){
        this.setState({
            searchFieldTarget: target
        });
        this.handleMenuClose();
    }

    render(){
        const listStyle = {
            maxHeight: '215px',
            overflow: 'auto',
        }

        const searchBarStyle = {
            display: 'flex',
            alignItems: 'center',
            margin: '10px',
            width: '100%'
        }

        return(
            <Grid container style={listStyle}>
                <Paper style={searchBarStyle}>
                    <IconButton aria-label="menu" onClick={(event) => this.handleMenuClick(event)}>
                        <MenuIcon/>
                    </IconButton>

                    <Menu keepMounted anchorEl={this.state.searchMenuAnchor} open={this.state.searchMenuOpen} onClose={() => this.handleMenuClose()}>
                        <MenuItem onClick={() => this.handleSearchFieldSwitch("YouTube")}>YouTube</MenuItem>
                        <MenuItem onClick={() => this.handleSearchFieldSwitch("Spotify")}>Spotify</MenuItem>
                    </Menu>

                    <InputBase style={{marginLeft: '10px', flex: '1'}} placeholder={this.state.searchFieldTarget}/>

                    <IconButton style={{padding: '10px'}}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
        )
    }
}


export default Navsearch