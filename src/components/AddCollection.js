/* eslint react/jsx-filename-extension:0 */
/*global localStorage document:true*/
/* eslint react/prop-types: 0 */
/* eslint no-unused-expressions:0 */


import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddCollection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
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
        this.setState({ open: false });
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
        // console.log(collectionName);
        let temp = [];
        // console.log(localStorage.getItem(collectionName));
        const { location } = this.props;
        temp.push(localStorage.getItem(collectionName));
        temp.push(location.state.moviename);
        localStorage.setItem(collectionName, temp);
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
        let { categoryList, open } = this.state;
        return (
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
            </div>
        );
    }

}

export default AddCollection;