import React from "react"
import { Link } from "gatsby"

const Navitem = ( props ) => {
    return (
        <li className='nav-item'><Link className='nav-link nav-contact' to={props.url}>{props.name}</Link></li>
    )
}

export default Navitem
