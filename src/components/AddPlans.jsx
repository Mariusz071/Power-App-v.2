import React, { Component } from 'react';
import CreatePlanForm from './FormComponents/CreatePlanForm';


class AddPlans extends Component {

    render() {
        return (
            <div className="section__main">
                <CreatePlanForm/>
            </div>
        )
    }

    componentDidMount() {
        this.props.hideMenu()
    }
}

export default AddPlans;