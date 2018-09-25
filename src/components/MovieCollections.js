/* eslint react/jsx-filename-extension:0 */
/*global localStorage:true*/


import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';


let listcategory = [];
let listmovies = [];
class MovieCollections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      open: false
    };
    this.displayCollections = this.displayCollections.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    listcategory = [];
    // write code here to retrieve your data from Local Storage or JSON server
    // console.log('All Category called');
    for (var i = 0; i < localStorage.length; i += 1) {
      let v = i;
      if (localStorage.key(v) !== 'loglevel:webpack-dev-server') {
        listcategory.push(
          localStorage.key(v)
        )
      }
    }
    this.setState({
      collection : listcategory
    });

  }

  displayCollections(key) {
    listmovies = [];
    this.state.collection = [];
    this.state.collection.push(localStorage.getItem(key).split(','));
    for (let i = 0; i < this.state.collection[0].length; i += 1) {
      // console.log(this.state.collection[0][i]);
      let v = i;
      listmovies.push(
        <Button key={v} variant='contained'>
          {this.state.collection[0][v]}
        </Button>

      )


    }
    this.setState({

    });
    this.handleClickOpen();

  }

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };


  render() {
    return (
      <div>
        <div className='movie-collections'>
          <Typography className='heading' variant='headline'>
            <strong>
              This is movie collection view
            </strong>
          </Typography>
          {listcategory.map((data) => {
            return(<Button variant='outlined' onClick={() => this.displayCollections(data)}>
            {data}
            </Button>)})}
        </div>
        <Dialog
          open={this.state.open}
          onClose={() => { this.handleClose }}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Movie List
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {listmovies.map(data => data)}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Okay !
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default MovieCollections;