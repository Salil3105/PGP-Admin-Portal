import React from 'react';
import '../components/Formheader.css';
// import form_image from '../src/Images/form';
// import {Fistar , FiSetting} from 'react-icons/fi';
import Star from '@material-ui/icons/StarBorder';
import Setting from '@material-ui/icons/SettingsOutlined';
import {AiOutlineEye} from 'react-icons/ai';
import {IconButton} from '@material-ui/core';
import avatarimage from '@material-ui/core/Avatar';
import {IoMdFolderOpen} from 'react-icons/io';

import ColorLensIcon from '@material-ui/icons/ColorLens';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar'


function Formheader() {
    return(
        <div className='form_header'>
            {/* <h2>Question</h2> */}
            <div className='form_header_left'>
                {/* <img src='' style={{height:'45px', width:'40px'}} /> */}
                <input type='text' placeholder='Untitled Form' className='form_name' ></input>
                <IoMdFolderOpen id='folderIcon' className='form_header_icon' style={{marginRight:'10px'}} ></IoMdFolderOpen>
                {/* <Fistar className='form_header_icon' style={{marginRight:'10px'}} /> */}
                <Star className='form_header_icon' style={{marginRight:'10px'}} />
                
                <span style={{fontSize:'12px', fontWeight:'600'}}>All Changes Saved in Drive</span>
            </div>


            <div className='form_header_right'>
                <IconButton>
                    <ColorLensIcon size='small' className='form_header_icon' />
                </IconButton>

                <IconButton>
                    <AiOutlineEye  className='form_header_icon' />
                </IconButton>

                <IconButton>
                    <Setting  className='form_header_icon' />
                </IconButton>

                <Button variant='contained' color='primary' href='#contained-buttons' >Send</Button>

                <IconButton>
                    <MoreVertIcon  className='form_header_icon' />
                </IconButton>
                
                <IconButton>
                    <Avatar style={{height:'30px', width:'30px'}} className='form_header_icon' />
                </IconButton>
            </div>
        </div>
    )
}

export default Formheader