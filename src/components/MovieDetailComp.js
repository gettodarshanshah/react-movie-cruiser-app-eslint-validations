/* eslint react/jsx-filename-extension:0 */
/*global document fetch:true*/
/* eslint react/prop-types: 0 */
/*eslint class-methods-use-this: ["error", { "exceptMethods": ["handlerNavigate"] }] */


import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class MovieDetailComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
        // this.handlerNavigate = this.handlerNavigate.bind(this);
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=c7c2954a02370c3c8e407441cee0a34f&language=en-US`)
            .then(response => response.json())
            .then(movies => {
                this.setState(() => ({ movies }));
               // console.log(this.state.movies);
            })
            // .catch(error => { console.log(error) });
    }

    handlerNavigate(){
        // console.log(movieDetailCard.title);
        // console.log(movieDetailCard);
        document.getElementById('navigate').click();
    }

    render() {
        const movieDetailCard = this.state.movies;
        return (
            <div className='parent-container'>
                <img src={`https://image.tmdb.org/t/p/original/${movieDetailCard.poster_path}`} alt='Nothing'></img>
                <div className='text'>
                    <Typography variant='headline' >
                        <strong>Movie Title :</strong> {movieDetailCard.title}
                    </Typography>
                    <Typography variant='title'>
                        <strong>Tagline :</strong> {movieDetailCard.tagline}
                    </Typography>
                    <Typography variant='body1'>
                        <strong>Votes :</strong> {movieDetailCard.vote_count}
                    </Typography>
                    <Typography variant='body1'>
                        <strong>Release Date :</strong> {movieDetailCard.release_date}
                    </Typography>
                    <Typography variant='body1'>
                        <strong>Revenue :</strong> {movieDetailCard.revenue}
                    </Typography>
                    <Typography variant='subheading' color='inherit'>
                        <strong>Overview :</strong> {movieDetailCard.overview}
                    </Typography>
                </div>
                <Button className='button-style' variant='raised' onClick={() => this.handlerNavigate()}>
                    {/* <NavLink className='button-style' to='/AddCollection'> */}
                        Add to Collection
                    {/* </NavLink> */}
                    <Link id="navigate" 
                    to={{
                        pathname:"/AddCollection",
                        state:{
                            moviename: movieDetailCard.title
                        }
                    }}></Link>
                </Button>
            </div>
        );
    }

}

export default MovieDetailComp;