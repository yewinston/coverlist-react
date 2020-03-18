import React from 'react';
// import { Grid } from '@material-ui/core';
// import { Box } from '@material-ui/core'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'

class Navdiscover extends React.Component{
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        const listStyle = {
            maxHeight: '215px',
            overflow: 'auto',
        }

        return(
            <List style={listStyle}>
                <ListItem>
                    <Typography variant='body1'>Listen to a curated playlist</Typography>
                </ListItem>

                <Divider style={{marginTop: '8px'}}/>

                <ListItem button>
                    <ListItemText primary='Discover 1' secondary='Random track name 1, random track name 2, ...'/>
                </ListItem>

                <ListItem button>
                    <ListItemText primary='Discover 2' secondary='Random track name 1, random track name 2, ...'/>
                </ListItem>

                <ListItem button>
                    <ListItemText primary='Discover 3' secondary='Random track name 1, random track name 2, ...'/>
                </ListItem>

                <ListItem button>
                    <ListItemText primary='Discover 4' secondary='Random track name 1, random track name 2, ...'/>
                </ListItem>

                <ListItem button>
                    <ListItemText primary='Discover 5' secondary='Random track name 1, random track name 2, ...'/>
                </ListItem>

                <ListItem button>
                    <ListItemText primary='Discover 6' secondary='Random track name 1, random track name 2, ...'/>
                </ListItem>
            </List>
        )
    }
}


export default Navdiscover