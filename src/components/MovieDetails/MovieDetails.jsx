import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({ title, rating, year, director, synopsis, gender, rate, handleBackHistory }) => 
    <div className="MovieDetails">
        <button onClick={handleBackHistory}>Voltar</button>

        <h1>{title}</h1>
        <div className="rating">{rating}</div>
        <div className="year">{year}</div>
        <div className="director">Diretor: {director}</div>
        <div className="synopsis">{synopsis}</div>
        <div className="gender">{gender}</div>
        <div className="rate">{rate}</div>
    </div>

export default MovieDetails