/* eslint react/jsx-filename-extension:0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import PopularMoviesCard from './PopularMoviesCard';

const PopularMovies = (props) => {
        
        return (
            <PopularMoviesCard 
            popularMovieList = {props.popularMovies}
            />
        );

}

export default PopularMovies;