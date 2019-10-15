import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CategoryRow from './CategoryRow'

class CategoryRowContainer extends Component {
    render () {
        return <CategoryRow 
                   title={this.props.title} 
                   movies={this.props.movies} />
    }
}

CategoryRowContainer.propTypes = {
    title: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired
}

export default CategoryRowContainer