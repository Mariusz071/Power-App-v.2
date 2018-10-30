import React, {Component} from 'react'
import {
    Link,
} from 'react-router-dom';


class MobileMenu extends Component {

    render() {
        let toggleMenu = 'mobile-nav';
        if(this.props.showMenu) {
            toggleMenu ='mobile-nav open'
        }

        return (
                <ul className={toggleMenu}>
                    <li onClick={this.props.hideMenu}><Link to ="/add">Add workout <i className="far fa-plus-square"></i></Link></li>
                    <li onClick={this.props.hideMenu}><Link to="/plans">My plans <i className="far fa-clipboard"></i></Link></li>
                    <li onClick={this.props.hideMenu}><Link to="/workouts">My workouts <i className="fas fa-dumbbell"></i></Link></li>
                    <li onClick={this.props.hideMenu}><Link to="/progress">Progress <i className="fas fa-chart-line"></i></Link></li>
                    <li onClick={this.props.hideMenu}><Link to="/currentworkout">Start! <i className="far fa-play-circle"></i></Link></li>
                </ul>
        )
    }
}

export default MobileMenu;