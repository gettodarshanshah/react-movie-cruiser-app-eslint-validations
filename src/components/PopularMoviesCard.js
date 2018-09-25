import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


class PopularMoviesCard extends React.Component {

    constructor(props){
        super(props);
        this.handlerNavigate = this.handlerNavigate.bind(this);
    }

    handlerNavigate(movieCard){
        console.log(movieCard.title);
        console.log(movieCard);
        document.getElementById('navigate').click();
    }

    render() {
        let movieCard = this.props.popularMovieList;
        return (
            <div className='popular-movies-card'>

                {movieCard != null ? (
                    movieCard.map(movie => {
                        const { id, title, original_language, popularity, overview, poster_path } = movie;
                        return (
                            <Card className='card' key={id}>
                                <CardActionArea className='card-action-area'>
                                    <CardMedia
                                        className='media'
                                        component='img'
                                        width='350'
                                        height='300'
                                        image={`https://image.tmdb.org/t/p/original/${poster_path}`}
                                        title={title}
                                    />
                                    <CardContent className='cardcontent'>
                                        <Typography gutterBottom variant="title">
                                            Title : {title}
                                        </Typography>
                                        <Typography variant='caption'>
                                            <strong>
                                                original_language : {original_language}<br></br>
                                                popularity : {popularity}
                                            </strong>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className='card-actions'>
                                    <Button className='button-style' color='inherit'>
                                        <NavLink className='button-style' to={`/MovieDetail/${id}`}>
                                            View Details
                                        </NavLink>
                                        
                                    </Button>
                                    {/* <Button className='button-style' color='inherit' onClick = {() => this.handlerNavigate(movieCard)}>
                                        Add To Collection
                                            <Link id="navigate"
                                            to={{
                                                pathname: "/AddCollection",
                                                state: {
                                                    moviename: movieCard.title
                                                }
                                            }}></Link>
                                    </Button> */}
                                </CardActions>
                            </Card>
                        )
                    })
                ) : ''
                }

            </div>

        );
    }
}


export default PopularMoviesCard;