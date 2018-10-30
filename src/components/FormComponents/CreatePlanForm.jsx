import React, {Component} from 'react';
import FormWorkout from "./FormWorkout";

class CreatePlanForm extends Component {
    state = {
        workoutsChange: '',
        exercises: [],
        workoutName: '',
        planName: ''
    };

    handleGetExercises = (array) => {
        this.setState({exercises:  [...array]})
    };

    handleGetWorkouts = (e) => {
        this.setState({
            exercises: e
        })
    };

    handleWorkoutName = (e) => {
        const val = e.target.value;
        this.setState({
            workoutName: val
        })
    };

    handlePlanName = (e) => {
        const val = e.target.value;
        this.setState({
            planName: val
        })
    };


    submitHandler = () => {
        const data = this.state.exercises;
        data.forEach((el) => {
            fetch('http://localhost:4005/Workouts', {
                method : 'POST',
                body: JSON.stringify( el ),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).then( resp => resp.json())
                .then( data => {
                    console.log( data );
                });
        });

        this.setState ({
            workoutName: '',
            planName: '',
        });
    };



    render() {
        return(
            <div className="form-wrapper">
                <form className="plan-form" onSubmit={this.handleSubmit}>
                    <label className="plan-form__plan-name">
                        Name of the Plan
                        <input value={this.state.planName}type="text"  id="planName" className="plan-form__plan-name-input" onChange={this.handlePlanName}/>
                    </label>

                    <label className="plan-form__workout-name">
                        Name of the workout
                        <input value={this.state.workoutName} type="text" id="workoutName" className="plan-form__workout-name-input" onChange={this.handleWorkoutName}/>
                    </label>
                        <div className="plan-form__workoutElement">
                            <FormWorkout getExercises={this.handleGetExercises}
                                         getWorkouts={this.handleGetWorkouts}
                                         workoutName={this.state.workoutName}
                                         planName={this.state.planName}/>
                        </div>

                    <button type="submit" id="addPlan" className="btn btn--white" onClick={this.submitHandler}>Add Workout</button>
                </form>
            </div>
        )
    }
}

export default CreatePlanForm