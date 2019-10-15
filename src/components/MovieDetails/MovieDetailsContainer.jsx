import React, { Component } from 'react'
import MovieService from '../../services/MovieService'
import MovieDetails from './MovieDetails'

class MovieDetailsContainer extends Component {
    state = {
        details: {}
    }

    componentDidMount () {
        const { params } = this.props.match
        const { movieId } = params

        this.fetchMovieDetails(movieId)
    }

    async fetchMovieDetails (id) {
        const service = new MovieService()

        const response = await service.getDetailsById(id)

        this.setState({
            details: response.data
        })
    }

    handleBackHistory = () => {
        this.props.history.goBack()
    }

    render () {
        return <MovieDetails title={this.state.details.titulo}
                             rating={this.state.details.avaliacao}
                             year={this.state.details.ano}
                             director={this.state.details.diretor}
                             gender={this.state.details.genero}
                             rate={this.state.details.faixaEtaria}
                             synopsis={this.state.details.sinopse}
                             handleBackHistory={this.handleBackHistory} />
    }
}

export default MovieDetailsContainer