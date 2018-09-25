import React from 'react';
import PopularMoviesCard from './PopularMoviesCard';

class PopularMovies extends React.Component {
    render() {
        
        return (
            <PopularMoviesCard 
            popularMovieList = {this.props.popularMovies}
            />
        );
    }

}

export default PopularMovies;