import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

let listcat = [];

class AddCollection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.existingCategory = this.existingCategory.bind(this);
        this.addToCategory = this.addToCategory.bind(this);
    }

    componentDidMount() {
        const { moviename } = this.props.location.state;
        console.log(moviename);
    }


    handleClickOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
    };

    handleCreate() {
        console.log('clicked create !!!');
        let temp = [];
        let value = document.getElementById('name').value;
        const { moviename } = this.props.location.state;
        if (localStorage.getItem(value) != null) {
            temp.push(localStorage.getItem(value));
            temp.push(moviename);
            localStorage.setItem(value, temp);
        }
        else {
            temp.push(moviename);
            localStorage.setItem(value, temp);
        }
        this.handleClose();
    }

    addToCategory(collectionName) {
        console.log(collectionName);
        let temp = [];
        console.log(localStorage.getItem(collectionName));
        const { moviename } = this.props.location.state;
        temp.push(localStorage.getItem(collectionName));
        temp.push(moviename);
        localStorage.setItem(collectionName, temp);
    }


    existingCategory() {
        listcat = [];
        console.log('ec');
        for (var i = 0; i < localStorage.length; i++) {
            let v = i;
            listcat.push(
                <Button key={v} onClick={() => this.addToCategory(localStorage.key(v))}>
                    {localStorage.key(v)}
                </Button>
            )
        }
        this.setState({

        });

    }

    render() {
        return (
            <div className='main-div'>
                <Button variant='outlined' onClick={this.handleClickOpen}>Create New Category</Button>
                <Button variant='outlined' onClick={this.existingCategory}>Existing Category</Button>
                {listcat.map(data => data)}
                <Dialog
                    open={this.state.open}
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