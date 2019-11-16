import React from 'react'
import ReactDOM from 'react-dom'
import './style/style.scss'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      upcomingMovies: []
    }


  }
  componentDidMount() {
    fetch(' https://api.themoviedb.org/3/movie/upcoming?api_key=133ebdcecf545565859351534dc13aec&language=en-US&page=1')
      .then(res => res.json())
      .then(res => this.setState({ upcomingMovies: res.results }))
  }
  render() {
    if (!this.state) return null
    console.log(this.state.upcomingMovies)
    return (
      <div>
        <h1>Flixbox</h1>
        <h2>Make your screen come true</h2>
        <div className="Upcoming">
          {this.state.upcomingMovies.map((results, i) => (
            // eslint-disable-next-line react/jsx-key
            <div className="UpcomingList">
              <img key={i} src={`https://image.tmdb.org/t/p/w300/${results.poster_path}`} alt={results.title}></img>
              <li id="title" key={i}>{results.title}
              </li>
              <div id="overview">
                {/* hide and show onclick */}
                <li key={i}>{results.overview}
                </li>
                <li id="release" key={i}>Release date: {results.release_date}
                </li>
              </div>
            </div>
          ))
          }
        </div>
      </div>//end of parent
    ) //end of return method
  } //end of render
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// Create componets and nav bar
// Corosel for divs so you can scroll left right to go throuhg movies
// component(navbar = filter through genere)
// component(navbar = filter through upcoming)
// component(navbar = filter through top movies)
// component(navbar = search)

