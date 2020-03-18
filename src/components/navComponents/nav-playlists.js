import React from 'react';
import Grid from '@material-ui/core/Grid';

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import Typography from '@material-ui/core/Typography'


class Navplaylists extends React.Component{
    constructor(){
        super()

        this.handleCreateDialogOpen = this.handleCreateDialogOpen.bind(this);
        this.handleCreateDialogClose = this.handleCreateDialogClose.bind(this);

        this.state = {
            createDialogOpen: false
        }
    }

    handleCreateDialogOpen(){
        this.setState({
            createDialogOpen: true
        });
    }

    handleCreateDialogClose(){
        this.setState({
            createDialogOpen: false
        })
    }

    render(){
        const listStyle = {
            maxHeight: '215px',
            overflow: 'auto',
        }

        const dialogStyle = {
            padding: '8px'
        }

        return(
            <>
                <List style={listStyle}>
                    <Grid container direction='row' justify='center'>
                        <Button style={{marginRight: '8px'}} onClick={() => this.handleCreateDialogOpen()} variant='outlined'>Create</Button>
                        <Button style={{marginRight: '8px'}} variant='outlined'>Edit</Button>
                        <Button style={{marginRight: '8px'}} variant='outlined'>Delete</Button>
                    </Grid>

                    <Divider style={{marginTop: '8px'}}/>

                    <ListItem button>
                        <ListItemText primary='Playlist 1' secondary='Random track name 1, random track name 2, ...'/>
                    </ListItem>

                    <ListItem button>
                        <ListItemText primary='Playlist 2' secondary='Random track name 1, random track name 2, ...'/>
                    </ListItem>

                    <ListItem button>
                        <ListItemText primary='Playlist 3' secondary='Random track name 1, random track name 2, ...'/>
                    </ListItem>

                    <ListItem button>
                        <ListItemText primary='Playlist 4' secondary='Random track name 1, random track name 2, ...'/>
                    </ListItem>

                    <ListItem button>
                        <ListItemText primary='Playlist 5' secondary='Random track name 1, random track name 2, ...'/>
                    </ListItem>

                    <ListItem button>
                        <ListItemText primary='Playlist 6' secondary='Random track name 1, random track name 2, ...'/>
                    </ListItem>
                </List>

                <Dialog style={dialogStyle} open={this.state.createDialogOpen} onClose={() => this.handleCreateDialogClose()}>
                    <DialogTitle disableTypography>
                        <Typography variant='h6'>Create Playlist</Typography>
                        <IconButton style={{position: 'absolute', right: '8px', top: '8px'}} onClick={() => this.handleCreateDialogClose()}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>

                    <Divider style={{margin: '0px 0px 8px 0px'}}/>
                    
                    <DialogContent style={{width: '500px'}}>
                        <TextField required style={{width: '100%'}} variant='outlined' label='Playlist Name' />
                        <TextField multiline rows="5" style={{marginTop: '8px', width: '100%'}} variant='outlined' label='Description' />
                    </DialogContent>

                    <Divider style={{margin: '8px 0px 8px 0px'}}/>

                    <DialogActions>
                        <Button autoFocus onClick={() => this.handleCreateDialogClose()} color="primary">
                            Create
                        </Button>
                        <Button autoFocus onClick={() => this.handleCreateDialogClose()} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>

            </>
        )
    }
}


export default Navplaylists