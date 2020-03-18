import React from 'react';
// import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AlbumIcon from '@material-ui/icons/Album';
import EqualizerIcon from '@material-ui/icons/Equalizer';

class Playlist extends React.Component{
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            <Box boxShadow={10} style={{height: '100vh', backgroundColor: 'white'}}>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <AlbumIcon />
                        </ListItemIcon>
                        <ListItemText primary='Original Track Name' secondary='Original Artist Name'/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <EqualizerIcon />
                        </ListItemIcon>
                        <ListItemText primary='This track is being played' secondary='Original Artist Name'/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <AlbumIcon />
                        </ListItemIcon>
                        <ListItemText primary='Original Track Name' secondary='Original Artist Name'/>
                    </ListItem>
                </List>
                
            </Box>
        )
    }
}


export default Playlist