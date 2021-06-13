import React from 'react';
import '../components/mainBody.css';
import StorageIcon from '@material-ui/icons/Storage';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { IconButton } from '@material-ui/core';

function mainBody() {
    return(
        <div className='mainbody'>
            <div className='mainbody_top'>
                <div className='mainbody_top_left' style={{fontSize:'16px' , fontWeight:'500'}}>
                    <b>Recent Form</b>
                </div>

                <div className='mainbody_top_right'>
                    <div className='mainbody_top_center' style={{fontSize:'14px', marginRight:'125px'}}><b>Owned by Anyone</b><ArrowDropDownIcon /></div>
                        <IconButton>
                            <StorageIcon style={{ fontSize:'16px', color:'black'}} />
                        </IconButton>
                        <IconButton>
                            <FolderOpenIcon style={{ fontSize:'16px', color:'black'}} />
                        </IconButton>
                </div>
            </div>

            <div className='mainbody_docs'>
                
            </div>

        </div>
    )
}

export default mainBody;
