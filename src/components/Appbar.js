/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Homeicon from '@material-ui/icons/HomeTwoTone';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';


class Appbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            // left: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleHome = this.handleHome.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer(side, open){
        this.setState({
          [side]: open,
        });
      };

    handleChange(event) {
        if (event.target.value == null) {
            window.location.reload();
        }
        else {
            this.setState({
                value: event.target.value
            });
        }
    }


    handleHome() {
        this.setState(() => ({}));
        window.location.reload();
    }

    render() {

        const { handleSearch } = this.props;
        let { value } = this.state;
        return (
            <AppBar className='appbar' position='sticky'>
                <Toolbar className='toolbar'>
                    <div className='appbar-left'>
                        <Homeicon className='homeicon' onClick={this.handleHome} />
                        <Typography className='home' variant="title" color="inherit" onClick={this.handleHome}>
                            Home
                        </Typography>
                        <Typography className='home' variant="title" color="inherit">
                            <NavLink className='home' to="/collections" activeClassName="is-active">
                                Collections
                            </NavLink>
                        </Typography>
                    </div>
                    <div className='appbar-right'>
                        <Input className='input' placeholder='Movie Name..' onChange={this.handleChange}></Input>
                        <Button onClick={() => { handleSearch(value) }} variant="extendedFab">Search</Button>
                    </div>
                </Toolbar>

                {/* <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                 <div
                     tabIndex={0}
                     role="button"
                     onClick={()=>{this.toggleDrawer('left', false)}}
                     onKeyDown={()=>{this.toggleDrawer('left', false)}}
                 >
                 </div>
                 <div className="list">
                         <List></List>
                         <Divider />
                         <List></List>
                     </div>
             </Drawer> */}
            </AppBar>
            
          
        );
    }
}

export default Appbar;