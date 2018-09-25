import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class MovieDetail extends React.Component {

    render() {
        return (
            <Dialog
                open={this.props.openModal}
                onClose={() => { this.props.handleCloseModal }}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {"Movie Title Here"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Movie overview Here
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { this.props.handleCloseModal }} color="primary">
                        Ok! Got It!
                     </Button>
                </DialogActions>
            </Dialog>

        );
    }
}


export default MovieDetail;