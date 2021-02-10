import { buildQueries } from '@testing-library/react'
import React from 'react'
import PropTypes from 'prop-types'


function Button({color, text, onClick}) {
    return (
        <div>
            <button onClick={onClick} style={{backgroundColor: color}} className="btn">{text}</button>
        </div>
    )
}


Button.defaultProps = {
    color : "blue",
}

Button.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
