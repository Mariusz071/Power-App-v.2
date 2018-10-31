import React, {Component} from 'react';


class PlanBox extends Component {
    state = {
        data: this.props.id
    };
    deleteHandler = () => {
        fetch(`http://localhost:4005/Workouts/${this.state.data}`, {
            method: 'delete'
        }).then(response =>
            response.json().then(json => {
                this.props.getPlans();
                return json;
            })
        ).catch((err) => { console.log(err);});

    };

    render() {

        return(
            <div className='workoutBox'>
                <div className="workoutBox__workout-name">
                    {this.props.planName}
                </div>
                <div className="workoutBox__workout-buttons">
                    <button className="workoutBox__workout-buttons edit-btn">Edit</button>
                    <button className="workoutBox__workout-buttons delete-btn" onClick={this.deleteHandler}>Delete</button>
                </div>
            </div>
        )
    }
}


export default PlanBox;