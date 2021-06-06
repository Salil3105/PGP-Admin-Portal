import React from 'react';
import "../components/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
// import formImage from '';
import searchIcon from '@material-ui/icons/Search';
import AppIcon from '@material-ui/icons/Apps';
import Avtar from "@material-ui/core/Avatar";
import { Height } from '@material-ui/icons';
import TemporaryDrawer from './TemporaryDrawer';

function Header() {
    return(
        <div className='header'>

            <div className='header_info'>
                <TemporaryDrawer />
                {/* <img src={formImage} style={{height:'40px', width:'40px'}} className='form_image' /> */}
                <div className='info'>
                    {/* <b>Survey Forms</b> */}
                </div>
            </div>

            <div className='header_search'>
                <IconButton>
                    <searchIcon />
                </IconButton>
                <input placeholder="Search Here" type="text" name="Search"/>
            </div>

            <div className='header_right'>
                <IconButton>
                    <AppIcon />    
                </IconButton>
                <IconButton>
                    <Avatar src="" />
                </IconButton>
            </div>

        </div>
    )
}

export default Header;