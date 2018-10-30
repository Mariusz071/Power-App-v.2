import React, { Component } from 'react';

class NavMenu extends Component {
    render() {
        return (
            <ul className="nav__menu">
                <li><a href="#">Add plan <i className="far fa-plus-square"></i></a></li>
                <li><a href="#">My plans <i className="far fa-clipboard"></i></a></li>
                <li><a href="#">My workouts <i className="fas fa-dumbbell"></i></a></li>
                <li><a href="#">Progress <i className="fas fa-chart-line"></i></a></li>
            </ul>
        )
    }
}

export default NavMenu;