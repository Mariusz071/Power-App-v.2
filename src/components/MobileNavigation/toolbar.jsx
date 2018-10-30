import React, {Component} from 'react'
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
                            {/*<li><a href="#">Add plan <i className="far fa-plus-square"></i></a></li>*/}
                            {/*<li><a href="#">My plans <i className="far fa-clipboard"></i></a></li>*/}
                            {/*<li><a href="#">My workouts <i className="fas fa-dumbbell"></i></a></li>*/}
                            {/*<li><a href="#">Progress <i className="fas fa-chart-line"></i></a></li>*/}
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}





export default Toolbar