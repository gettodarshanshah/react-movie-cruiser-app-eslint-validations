import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Homeicon from '@material-ui/icons/HomeTwoTone';
import Button from '@material-ui/core/Button';
import MoviesCard from './MoviesCard';
import { NavLink } from 'react-router-dom';


class Appbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleHome = this.handleHome.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }


    handleHome() {
        window.location.reload();
    }

    render() {

        return (
            <div>
                <AppBar position='static'>
                    <Toolbar className='toolbar'>
                        <Homeicon className='homeicon' onClick={this.handleHome} />
                        <Typography className='home' variant="title" color="inherit" onClick={this.handleHome}>
                            Home
                        </Typography>
                        <Typography className='home' variant="title" color="inherit">
                            <NavLink className='home' to="/collections" activeClassName="is-active">
                                Collections
                            </NavLink>
                        </Typography>
                        <div className='appbar-right'>
                            <Input className='input' placeholder='Movie Name..' onChange={this.handleChange}></Input>
                            <Button onClick={() => { this.props.handleSearch(this.state.value) }} variant="extendedFab">Search</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>

        );
    }
}

export default Appbar;