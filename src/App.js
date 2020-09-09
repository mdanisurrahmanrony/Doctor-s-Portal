import React from "react";
import "./App.css";
import HomePage from "./page/Home/HomePage";
import { Switch, Route } from "react-router-dom";
import AppointmnetPage from "./page/Appoinment/AppointmnetPage";
import Dashboard from "./page/Dashboard/Dashboard";
import AppointmentDash from "./component/Dashboard/Appointment/Appointment";
import Patients from "./component/Dashboard/Patients/Patients";
import Prescription from "./component/Dashboard/Prescription/Prescription";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/appointment" component={AppointmnetPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route
                    path="/appoinmentdashboard"
                    component={AppointmentDash}
                />
                <Route path="/patients" component={Patients} />
                <Route path="/prescription" component={Prescription} />
            </Switch>
        </div>
    );
}

export default App;
