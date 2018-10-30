import React, { Component } from 'react';
import MainButton from "./MainButton";


class Main extends Component {

    render() {
        return (
            <div className="section__main">
                <div className="main-wrapper">
                    <h1>It's workout time!</h1>
                    <MainButton/>
                </div>
            </div>
        )
    }
}

export default Main