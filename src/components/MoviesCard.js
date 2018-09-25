/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */
/*eslint camelcase: 0*/

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
// import MovieDetail from './MovieDetail';
import { NavLink } from 'react-router-dom';


const MoviesCard = (props) => {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         openModal: false
  //     }
  //     this.handleOpenModal = this.handleOpenModal.bind(this);
  //     this.handleCloseModal = this.handleCloseModal.bind(this);
  // }

  // handleOpenModal() {
  //     this.setState({
  //         openModal: true
  //     });
  // }

  // handleCloseModal() {
  //     this.setState({
  //         openModal: false
  //     });
  // };

  const movieCard = props.movieList;
  return (
    <div className="movies-card">

      {movieCard != null ? (
        movieCard.map((movie) => {
          const {
            id, title, original_language, popularity, poster_path,
          } = movie;
          return (
            <div key={id}>
              <Card
                className="card"
                key={id}
              >
                <CardActionArea>
                  <CardMedia
                    className="media"
                    component="img"
                    width="400"
                    height="300"
                    image={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    title={title}
                  />
                  <CardContent className="cardcontent">
                    <Typography gutterBottom variant="title">
                                                Title :
                      {' '}
                      {title}
                    </Typography>
                    <Typography variant="caption">
                      <strong>
                                                    original_language :
                          {' '}
                          {original_language}
                          <br />
                                                    popularity :
                          {' '}
                          {popularity}
                        </strong>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="card-actions">
                  {/* <Button className='button-style' color='inherit'>
                                            <NavLink className='button-style' to='/AddCollection'>
                                                Add to Collection
                                            </NavLink>
                                        </Button> */}
                  <Button className="button-style" color="inherit">
                    <NavLink className="button-style" to={`/MovieDetail/${id}`}>
                                                View Details
                    </NavLink>
                  </Button>
                </CardActions>
              </Card>
              {/* <MovieDetail
                                openModal={this.state.openModal}
                                handleCloseModal = {this.handleCloseModal}
                                /> */}
            </div>
          );
        })
      ) : ''
                }

    </div>

  );
};


export default MoviesCard;
