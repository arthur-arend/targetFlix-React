import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './CategoryRow.css'

const CategoryRow = ({ title, movies }) => 
    <div className="CategoryRow">
        {title}

        <div className="movies">
            {movies.map((movie, index) => 
                <Card key={index} 
                      id={movie.id}
                      title={movie.titulo} 
                      imageUrl={movie.imagem} />
            )}
        </div>
    </div>


CategoryRow.propTypes = {
    title: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired
}    

export default CategoryRow