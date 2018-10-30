import React, { Component } from 'react';

class Progress extends Component {
    render() {
        return (
            <div className="section__main">
                <div className="progress-wrapper">
                    <h2>In progress</h2>
                    <div className="spinner-animation"><i className="fas fa-spinner"></i></div>
                    <h3>This feature will be ready soon.</h3>
                </div>
            </div>
        )
    }
}

export default Progress;