import Axios from "axios"

class MovieService {
    getDetailsById(id) {
        return Axios.get('http://localhost:3001/api/filmes/' + id)
    }
}

export default MovieService