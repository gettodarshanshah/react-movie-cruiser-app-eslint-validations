/* eslint react/jsx-filename-extension:0 */
/*global fetch:true*/
import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Appbar from './Appbar';
import PopularMovies from './PopularMovies';
import MoviesCard from './MoviesCard';
import '../styles/styles.scss';

const API_KEY = 'c7c2954a02370c3c8e407441cee0a34f';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetails: [],
            total_pages: 0,
            popularMovies: null,
            movieValue: null
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(d => { return d.json(); })
            .then(movieList => {
                this.setState({
                    popularMovies: movieList.results
                });
            })
            // .catch(error => { console.log(error) });
    }

    handleSearch(movieName) {
        this.setState({
            movieDetails: [],
            movieValue: movieName
        });
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(response => {
                this.setState({ total_pages: response.total_pages });
                let tempMovies = [];
                for (let i = 1; i <= this.state.total_pages; i += 1) {
                    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.movieValue}&page=${i}&include_adult=false`)
                        .then(resp => resp.json())
                        .then(moviesData => {
                            moviesData.results.forEach(result => {
                                tempMovies.push(result);
                            })
                            this.setState({
                                movieDetails: tempMovies
                            });
                        })
                        // .catch(error => { Console.log(error) });
                };
            }
            )
            // .catch(error => { console.log(error) });
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Appbar
                        movieDetails={this.state.movieDetails}
                        handleSearch={this.handleSearch}
                    />
                </div>
                <div>
                <MoviesCard
                    movieList={this.state.movieDetails}
                />
                </div>
                <div>
                    <Typography className='popular-heading' variant='display1' gutterBottom>
                        Popular Movies
                    </Typography>
                    <PopularMovies popularMovies={this.state.popularMovies}
                    />
                </div>
            </Fragment>
        )
    }

}

export default App;