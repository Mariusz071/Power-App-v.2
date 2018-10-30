import React, { Component } from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import './assets/sass/index.scss';
import AddPlans from "./components/AddPlans";
import CurrentPlans from "./components/PlansComponents/AllPlans";
import Workouts from "./components/WorkoutsComponents/Workouts";
import Main from "./components/MainComponents/Main";
import Progress from "./components/Progress"
import Toolbar from './components/MobileNavigation/toolbar';
import MobileMenu from "./components/MobileNavigation/MobileMenu";
import CurrentWorkout from "./components/CurrentWorkout";

class App extends Component {
    state = {
        MobileMenuVisible: false,
    };

    mobileMenuToggle = () => {
        this.setState({MobileMenuVisible: !this.state.MobileMenuVisible});
        if (this.state.MobileMenuVisible) {
            this.setState({MainButtonVisible: false})
        }
    };

    mobileMenuHide = () => {
        this.setState({MobileMenuVisible: false});
    };


  render() {
    return (
        <HashRouter>
            <div className="container">
                <Toolbar mobileMenuToggle={this.mobileMenuToggle}/>
                <MobileMenu showMenu={this.state.MobileMenuVisible}  hideMenu = {this.mobileMenuHide}/>
                <Switch>
                    <Route exact path="/"
                           render={(props) => <Main {...props} showMobileNav={this.mobileMenuHide} />} />
                    <Route path="/add"
                           render={(props) => <AddPlans {...props} showMobileNav={this.mobileMenuToggle}  hideMenu={this.mobileMenuHide}/>}  />
                    <Route path="/plans"
                           render={(props) => <CurrentPlans {...props} showMobileNav={this.state.MobileMenuVisible} hideMenu={this.mobileMenuHide} />} />
                    <Route path="/workouts"
                           render={(props) => <Workouts {...props} showMobileNav={this.state.MobileMenuVisible} hideMenu={this.mobileMenuHide} />} />
                    <Route path="/progress"
                           render={(props) => <Progress {...props} showMobileNav={this.state.MobileMenuVisible} hideMenu={this.mobileMenuHide} />} />
                    <Route path="/currentworkout"
                           render={(props) => <CurrentWorkout {...props} showMobileNav={this.state.MobileMenuVisible} hideMenu={this.mobileMenuHide} />} />
                </Switch>
            </div>
        </HashRouter>
    );
  }
}

export default App;
