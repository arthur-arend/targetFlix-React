import axios from 'axios'

class CategoryService {
    getAll () {
        return axios.get('http://localhost:3001/api/categorias')
    }
}

export default CategoryService