/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { NavLink } from 'react-router-dom';


const SearchedMovies = (props) => {

  const {movieList} = props;
  return (
    <div className="movies-card">

      {movieList != null ? (
        movieList.map((movie) => {
          const {
            id, title, original_language: originalLanguage, popularity, poster_path: posterPath,
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
                    height="350"
                    image={`https://image.tmdb.org/t/p/original/${posterPath}`}
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
                        {originalLanguage}
                        <br />
                        popularity :
                          {' '}
                        {popularity}
                      </strong>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="card-actions">
                  <Button className="button-style" color="inherit">
                    <NavLink className="button-style" to={`/movie-detail/${id}`}>
                      View Details
                    </NavLink>
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })
      ) : ''
      }

    </div>

  );
};


export default SearchedMovies;
