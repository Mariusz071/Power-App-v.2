import React, {Component} from 'react'

class MobileMenuButton extends Component {
 render() {
     return <button className="btn--toggle-menu" onClick={this.props.click}>Menu</button>
    }
}

export default MobileMenuButton;