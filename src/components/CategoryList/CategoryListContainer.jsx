import React, { Component } from 'react'
import CategoryRowContainer from '../CategoryRow/CategoryRowContainer'
import CategoryService from '../../services/CategoryService'

class CategoryListContainer extends Component {
    state = {
        categories: []
    }

    componentDidMount () {
        this.fetchCategories()
    }

    async fetchCategories () {
        const service = new CategoryService()

        const response = await service.getAll()

        this.setState({
            categories: response.data
        })
    }

    render () {
        return <div className="CategoryList">
            {this.state.categories.map((category, index) => 
                <CategoryRowContainer 
                    key={index} 
                    title={category.descricao}
                    movies={category.filmes} />
            )}
        </div>

    }
}

export default CategoryListContainer