import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Card.css'

const Card = ({ id, title, imageUrl }) => 
    <div className="Card" style={{ backgroundImage: `url(${imageUrl})` }} >
        {title}
        <Link to={'/filme/' + id}>+ detalhes</Link>
    </div>

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
}

export default Card