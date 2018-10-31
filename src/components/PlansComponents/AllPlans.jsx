import React, { Component } from 'react';
import PlanBox from './PlanBox'

class Plans extends Component {
    state = {
        workoutData: []
    };

    componentDidMount() {
        this.getPlans()
    }

    getPlans = () => {
        fetch('http://localhost:4005/Workouts').then(resp => {
            if (resp.ok) {
                return resp.json()
            }
            throw new Error('Blad');
        })
            .then(data => {
                const newData = {};
                data.forEach(item => {
                    if(typeof newData[item.planName] === 'undefined') {
                        newData[item.planName] = [];
                    }
                    newData[item.planName].push(item);
                });
                this.setState({
                    workoutData: newData
                })
            })

        };

    render() {
        return (
            <div className="section__main">
                <div className="boxes-container">
                    <div className="current-plan"><h2>Yours plans</h2></div>
                    {Object.entries(this.state.workoutData).map(([key, value]) => {
                        return (
                            <div className="boxes-wrapper">
                                <PlanBox  getPlans={this.getPlans} planData={value} id={key} planName={<h2>{key}</h2>}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Plans;