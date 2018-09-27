/* eslint react/jsx-filename-extension:0 */
/* eslint no-unused-expressions:0 */

import React from 'react';
import NavBar from './NavigationBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    this.removeCategory = this.removeCategory.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
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
    let { collection } = this.state;
    collection = [];
    collection.push(localStorage.getItem(key).split(','));
    for (let i = 0; i < collection[0].length; i += 1) {
      // console.log(this.state.collection[0][i]);
      let localStorageIndex = i;
      listMoviesTemp.push(
        <div key={localStorageIndex} variant='contained'>
          {collection[0][localStorageIndex]}
          <Button variant='text' onClick={() => { this.removeMovie(key, i) }}>X</Button>
        </div>

      )


    }
    this.setState({
      listMovies: listMoviesTemp
    });
    this.handleClickOpen();

  }

  removeCategory(key) {
    localStorage.removeItem(key);
    this.setState({});
  }

  removeMovie(key, localStorageIndex) {
    console.log('remove movie()', localStorage.getItem(key)[localStorageIndex]);
    this.setState({});
  }

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };


  render() {
    let { listCategory } = this.state;
    let { open } = this.state;
    let { listMovies } = this.state;
    return (
      <div>
        <NavBar />
        <div className='movie-collections'>
          <p className='popular-heading' variant='display1'>
            Movie Categories
          </p>
          {listCategory.map((data) => {
            return (<div key={data}><Button variant='flat' onClick={() => this.displayCollections(data)}>
              {data}
            </Button>
              <Button variant='text' onClick={() => this.removeCategory(data)}>X</Button>
            </div>)
          })}
        </div>
        <Dialog
          open={open}
          onClose={() => { this.handleClose }}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Movie List
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {listMovies.map(data => data)}
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