import React from 'react'

export default function Navbar(props) {
    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo">{props.title}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </nav>
    )
}
