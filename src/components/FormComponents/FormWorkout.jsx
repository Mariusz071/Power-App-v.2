import React, {Component} from 'react'

class FormWorkout extends Component {
    state = {
        workoutName: this.props.workoutName,
        setsNumber: '',
        exerciseName: '',
        planName: '',
        workoutsArray: ''
    };

    handleSetsChange = (e) => {
        const setsNumber = e.target.value;
        this.setState({
            setsNumber: Number(setsNumber)
        })
    };


    handleExerciseName = (e) => {
        const exerciseName = e.target.value;
        this.setState({
            exerciseName: exerciseName
        })
    };


    addExercise = () => {
        const workoutObject = {
            'planName': this.props.planName,
            'workoutName': this.props.workoutName,
            'exerciseName': this.state.exerciseName,
            'setsNumber': this.state.setsNumber
        };
        this.setState({
            workoutsArray: [...this.state.workoutsArray, workoutObject]
        }, () => {
            if (typeof this.props.getWorkouts === "function") {
                this.props.getWorkouts()
            }
            let exercisesArray = this.state.workoutsArray.slice();
            this.props.getExercises(exercisesArray)
        });

        this.setState ({
            setsNumber: '',
            exerciseName: ''
        });

    };

    render() {
        return(
            <div className="form-workout" >
                <label className="form-workout--label-wrapper">
                    Name of the exercise
                    <input value={this.state.exerciseName} type="text" id="exerciseName" className="form-workout--exercise-name" onChange={this.handleExerciseName}/>
                </label>

                <label className="form-workout--label-wrapper">
                    How many sets are you up to?
                    <input value={this.state.setsNumber} type="text" className="form-workout--workout-sets" id="exerciseSets" onChange={this.handleSetsChange}/>
                </label>
                <button type="submit" className="plan-form__workout-number-btn" id="addExercise" onClick={this.addExercise}>Add this exercise</button>
            </div>
        )
    }
}

export default FormWorkout