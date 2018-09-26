/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import PopularMoviesCard from './PopularMoviesCard';

const PopularMovies = (props) => {
        let {popularMovies} = props; 
        return (
            <PopularMoviesCard 
            popularMovieList = {popularMovies}
            />
        );

}

export default PopularMovies;