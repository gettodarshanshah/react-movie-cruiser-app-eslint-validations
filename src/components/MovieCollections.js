/* eslint react/jsx-filename-extension:0 */
/*global localStorage:true*/
/* eslint no-unused-expressions:0 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

class MovieCollections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      listCategory: [],
      listMovies: [],
      open: false
    };
    this.displayCollections = this.displayCollections.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    let listCategoryTemp = [];
    // write code here to retrieve your data from Local Storage or JSON server
    // console.log('All Category called');
    for (var i = 0; i < localStorage.length; i += 1) {
      let localStorageIndex = i;
      if (localStorage.key(localStorageIndex) !== 'loglevel:webpack-dev-server') {
        listCategoryTemp.push(
          localStorage.key(localStorageIndex)
        )
      }
    }
    this.setState({
      collection: listCategoryTemp,
      listCategory: listCategoryTemp
    });

  }

  displayCollections(key) {
    let listMoviesTemp = [];
    this.state.collection = [];
    this.state.collection.push(localStorage.getItem(key).split(','));
    for (let i = 0; i < this.state.collection[0].length; i += 1) {
      // console.log(this.state.collection[0][i]);
      let localStorageIndex = i;
      listMoviesTemp.push(
        <Button key={localStorageIndex} variant='contained'>
          {this.state.collection[0][localStorageIndex]}
        </Button>

      )


    }
    this.setState({
      listMovies: listMoviesTemp
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
              Movie Categories and Collections
            </strong>
          </Typography>
          {this.state.listCategory.map((data) => {
            return (<Button variant='outlined' onClick={() => this.displayCollections(data)}>
              {data}
            </Button>)
          })}
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
              {this.state.listMovies.map(data => data)}
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