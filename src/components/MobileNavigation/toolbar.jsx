import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ToolbarLogo from './ToolbarLogo.jsx';
import MobileMenuButton from './MobileMenuButton';

class Toolbar extends Component {
    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="mobile-button-container">
                        <MobileMenuButton click={this.props.mobileMenuToggle}/>
                    </div>
                    <div>
                        <ToolbarLogo />
                    </div>
                    <div className="divider"/>
                    <div className="toolbar__navigation__items">
                        <ul>
                            <li onClick={this.props.hideMenu}><Link to ="/add">Add workout <i className="far fa-plus-square"></i></Link></li>
                            <li onClick={this.props.hideMenu}><Link to="/plans">My plans <i className="far fa-clipboard"></i></Link></li>
                            <li onClick={this.props.hideMenu}><Link to="/workouts">My workouts <i className="fas fa-dumbbell"></i></Link></li>
                            <li onClick={this.props.hideMenu}><Link to="/progress">Progress <i className="fas fa-chart-line"></i></Link></li>
                            <li onClick={this.props.hideMenu}><Link to="/currentworkout">Start! <i className="far fa-play-circle"></i></Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}





export default Toolbar