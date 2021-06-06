import React from 'react';
import "../components/TemporaryDrawer.css";
import MenuIcon from "@material-ui/icons/Menu";
import {IconButton, ListItemText} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List'; 
import ListItem from '@material-ui/core/ListItem'; 
import Divider from '@material-ui/core/Divider';

function TemporaryDrawer() {

    const [state,setState] = React.useState({
        left: false
    })

    const toggleDrawer = (anchor,open) =>(event) =>{
        setState({...state, [anchor]:open});
    };

    const list = (anchor) =>(
        <div style={{width:'250px'}} role="presentation">
            {/* <Divider> */}
                <List>
                    <ListItem className='brandname'>
                        <ListItemText style={{fontSize:'480px', marginLeft:'5px'}}>
                        
                            <span className='brandname' style={{color:'violet',fontWeight:'700',fontSize:'22px',fontFamily:"'product Sans',Arial,sans-serif"}}><b>P</b></span>
                            <span className='brandname' style={{color:'darkcyan',fontWeight:'500',fontSize:'22px',fontFamily:"'product Sans',Arial,sans-serif"}}><b>G</b></span>
                            <span className='brandname' style={{color:'violet',fontWeight:'700',fontSize:'22px',fontFamily:"'product Sans',Arial,sans-serif"}}><b>P</b></span>
                        
                        </ListItemText>
                    </ListItem>
                    <Divider></Divider>
                </List>      
            {/* </Divider> */}
                
            <List style={{marginLeft:'08px',marginRight:'08px',marginTop:'15px'}}>
                {/*  Mentioned your list down below inside the tag of ListItem of same className! */}
                
                <ListItem className='list_item'>
                        <img  src=''/>
                        <div ><b>Google Docs </b></div>
                </ListItem>

                <ListItem className='list_item'>
                        <img  src=''/>
                        <div><b>Google Sheet</b></div>
                </ListItem>
            </List>
        </div>
    )
    return(
        <div>
            <React.Fragment>
                <IconButton onClick={toggleDrawer("left",true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={state['left']} onClose={toggleDrawer("left",false)} anchor='left'>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    )
}

export default TemporaryDrawer;