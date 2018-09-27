/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */
/* eslint no-unused-expressions:0 */

import React from 'react';
import NavBar from './NavigationBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';

class AddCollection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openSnack: false,
            categoryList: []
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.existingCategory = this.existingCategory.bind(this);
        this.addToCategory = this.addToCategory.bind(this);
    }


    handleClickOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false, openSnack: false });
    };

    handleCreate() {
        // console.log('clicked create !!!');
        let temp = [];
        let { value } = document.getElementById('name');
        const { location } = this.props;
        if (localStorage.getItem(value) != null) {
            temp.push(localStorage.getItem(value));
            temp.push(location.state.moviename);
            localStorage.setItem(value, temp);
        }
        else {
            temp.push(location.state.moviename);
            localStorage.setItem(value, temp);
        }
        this.handleClose();
    }

    addToCategory(collectionName) {
        let temp;
        temp = localStorage.getItem(collectionName);
        let tempArray = temp.split(',');
        const { location } = this.props;
        // temp.push(localStorage.getItem(collectionName));
        if (tempArray.indexOf(location.state.moviename) === -1) {
            temp = temp + ',';
            temp = temp + location.state.moviename;
            localStorage.setItem(collectionName, temp);
        }
        else {
            this.setState({ openSnack: true });
        }
        // console.log(temp);
    }


    existingCategory() {
        let categoryListTemp = [];
        // console.log('ec');
        for (var i = 0; i < localStorage.length; i += 1) {
            let localStorageIndex = i;
            if (localStorage.key(localStorageIndex) !== 'loglevel:webpack-dev-server') {
                categoryListTemp.push(
                    <Button
                        key={localStorageIndex}
                        onClick={() => this.addToCategory(localStorage.key(localStorageIndex))}>
                        {localStorage.key(localStorageIndex)}
                    </Button>
                )
            }
        }
        this.setState({
            categoryList: categoryListTemp
        });

    }

    render() {
        let { categoryList, open, openSnack } = this.state;
        let { location } = this.props;
        return (
            <div>
                <NavBar />
                <div className='main-div'>
                    <Button variant='outlined' onClick={this.handleClickOpen}>Create New Category</Button>
                    <Button variant='outlined' onClick={this.existingCategory}>Existing Category</Button>
                    {categoryList.map(data => data)}
                    <Dialog
                        open={open}
                        onClose={() => { this.handleClose }}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Create Category</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Enter Category Name
                    </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Category"
                                type="text"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleCreate} color="primary">
                                Create
                        </Button>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                        </Button>
                        </DialogActions>
                    </Dialog>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        open={openSnack}
                        onClose={this.handleClose}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">
                            `{location.state.moviename}` already exist in this category
                            </span>}
                    />
                </div>
            </div>
        );
    }

}

export default AddCollection;