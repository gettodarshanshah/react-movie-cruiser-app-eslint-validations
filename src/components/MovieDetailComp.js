/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import NavBar from './NavigationBar';
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
        const { match } = this.props;
        fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=c7c2954a02370c3c8e407441cee0a34f&language=en-US`)
            .then(response => response.json())
            .then(movies => {
                this.setState(() => ({ movies }));
                // console.log(this.state.movies);
            })
        // .catch(error => { console.log(error) });
    }

    handlerNavigate() {
        this.setState(() => ({}));
        document.getElementById('navigate').click();
    }

    render() {
        const { movies } = this.state;
        return (
            <div>
                <NavBar />
                <br></br>
                <br></br>
                <div className='parent-container'>
                    <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt='Nothing'></img>
                    <div className='text'>
                        <Typography variant='headline' >
                            <strong>Movie Title :</strong> {movies.title}
                        </Typography>
                        <Typography variant='title'>
                            <strong>Tagline :</strong> {movies.tagline}
                        </Typography>
                        <Typography variant='body1'>
                            <strong>Votes :</strong> {movies.vote_count}
                        </Typography>
                        <Typography variant='body1'>
                            <strong>Release Date :</strong> {movies.release_date}
                        </Typography>
                        <Typography variant='body1'>
                            <strong>Revenue :</strong> {movies.revenue}
                        </Typography>
                        <Typography variant='subheading' color='inherit'>
                            <strong>Overview :</strong> {movies.overview}
                        </Typography>
                    </div>
                    <Button className='button-style' variant='raised' onClick={() => this.handlerNavigate()}>
                        {/* <NavLink className='button-style' to='/AddCollection'> */}
                        Add to Collection
                    {/* </NavLink> */}
                        <Link id="navigate"
                            to={{
                                pathname: "/add-collection",
                                state: {
                                    moviename: movies.title
                                }
                            }}></Link>
                    </Button>
                </div>
            </div>

        );
    }

}

export default MovieDetailComp;