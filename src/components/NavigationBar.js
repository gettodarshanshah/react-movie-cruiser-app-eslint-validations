/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Homeicon from '@material-ui/icons/HomeTwoTone';
import { NavLink } from 'react-router-dom';


const NavBar = () => {


    return (
        <div>
            <AppBar position='static'>
                <Toolbar className='toolbar'>
                    <NavLink className='home' to="/" activeClassName="is-active">
                        <Homeicon className='homeicon' />
                    </NavLink>
                    <NavLink className='home' to="/" activeClassName="is-active">
                        <Typography className='home' variant="title" color="inherit">
                            Home
                        </Typography>
                    </NavLink>
                    <Typography className='home' variant="title" color="inherit">
                        <NavLink className='home' to="/collections" activeClassName="is-active">
                            Collections
                            </NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
            <br></br>
        </div>

    );
}

export default NavBar;