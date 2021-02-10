import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

function Header({title}) {
    // Function writting for onclick
    const onClick = () => {
        console.log("I am Clicked")

    }

    return (
        <header className="header">
            <h1 >{title}</h1>
            <Button color="black" text="Add" onClick={onClick} />
            
        </header>
    )
}

Header.defaultProps = {
    title: "This is a title",
}

Header.proptype = {
    title: PropTypes.string.isRequired,
}

export default Header
