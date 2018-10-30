import React, {Component} from 'react';


class WorkoutBox extends Component {
    state = {
        data: this.props.data
    };
    deleteHandler = () => {
            fetch(`http://localhost:4005/Workouts/${this.props.id}`, {
                method: 'delete'
            }).then(response =>
                response.json().then(json => {
                    this.props.getWorkouts();
                    return json;
                })
            ).catch((err) => { console.log(err);});
        };

    render() {
        return(
            <div className='workoutBox'>
                <div className="workoutBox__workout-name">
                    {this.props.workoutName}
                </div>
                <div className="workoutBox__workout-buttons">
                    <button className="workoutBox__workout-buttons edit-btn">Edit</button>
                    <button className="workoutBox__workout-buttons delete-btn" onClick={this.deleteHandler}>Delete</button>
                </div>
            </div>
        )
    }
}


export default WorkoutBox;