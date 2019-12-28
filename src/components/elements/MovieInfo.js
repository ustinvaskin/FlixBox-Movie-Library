import React from 'react'

import { NoImage } from '../images/no_image.jpg'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'

import MovieThumb from '../elements/MovieThumb'
// import Modal from './Modal'

import { StyledMovieInfo } from '../styles/StyledMovieInfo'
import FontAwesome from 'react-fontawesome'

import PropTypes from 'prop-types'
// import { render } from 'react-dom'


const MovieInfo = ({ movie }) => (
  
//   trailer:
// 	let modalID ;
// 		if(typeof this.props.movie.id !== "undefined"){
// 			modalID = <Modal modal={this.props.movie.id} />	
// } 
// 			else {
// 			modalID = <div>Loading !!! </div>
	

  <StyledMovieInfo backdrop={movie.backdrop_path}>
<div className="movieinfo-content"> 
    <div className="movieinfo-thumb">
      <MovieThumb
          image={
              movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
          }
      clickable={false}
      />
</div>
<div className="movieinfo-text">
<h1>{movie.title}</h1>
<h2>{movie.tagline}</h2>
<h3>PLOT</h3>
<p>{movie.overview}</p>

<div className="rating-director">
  <div>
    <h3>IMDB RATING</h3>
    <div className="score">{movie.vote_average}</div>
    </div>
   
    <div className="director"> 
    <h3>VOTE COUNT</h3>
    <FontAwesome className="fa-budget" name="heart" size="2x"><h4>{movie.vote_count}</h4> </FontAwesome> 
    </div>

    <div className="director"> 
    <h3>PLAY TRAILER</h3>
    {/* {modalID} */}
    <FontAwesome className="fa-budget" name="play" size="2x" />
    </div>

    <div className="director"> 
    <h3>RELEASE DATE</h3>
    <h3>{movie.release_date} </h3> 
    {/* <FontAwesome className="fa-budget" name="calendar" size="2x" /> */}
    </div>


    <div className="director"> 
        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
        {movie.directors.map(element =>  (
          <p key={element.credit_id}>{element.name}</p>
        ))}
     </div>
   </div>
 </div>
</div>
  </StyledMovieInfo>
)

MovieInfo.propTypes= {
  movie: PropTypes.object,
  directors: PropTypes.array,
}

export default MovieInfo