import React, { useState, useEffect } from "react";
import "./Appointment.css";
import Sidebar from "../../Sidebar/Sidebar";
import Calendar from "react-calendar";

const AppointmentDash = () => {
    const [date, setDate] = useState([new Date()]);
    const [appointments, setAppointment] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://radiant-badlands-05887.herokuapp.com/getPatientsInfo")
            .then((res) => res.json())
            .then((data) => {
                setAppointment(data);
                setLoading(false);
            });
    }, []);

    let fixedDate = date.toLocaleString();
    let index = fixedDate.indexOf(",");
    let finalDate = fixedDate.slice(0, index);
    const handleDate = (dates) => {
        setDate(dates);
    };

    let count = 1;

    return (
        <div className="dash-board appoint-dash">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-sm-3 p-0">
                        <Sidebar />
                    </div>
                    <div
                        className="col-lg-10 col-sm-9 dashboard-bg"
                        style={{ height: "100vh" }}
                    >
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="pt-5 ml-5">Appointments</h1>
                            </div>
                        </div>
                        <div
                            className="row d-flex align-items-center"
                            style={{ height: "80%", margin: "0px 20px" }}
                        >
                            <div className="col-md-6">
                                <Calendar
                                    className="calendar"
                                    onChange={handleDate}
                                    calendarType="US"
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="app-table">
                                    {loading && (
                                        <div className="d-flex justify-content-center">
                                            <div
                                                className="spinner-grow text-info"
                                                role="status"
                                                style={{
                                                    position: "absolute",
                                                    top: "50%",
                                                }}
                                            ></div>
                                        </div>
                                    )}
                                    <div className="clear-fix mb-5">
                                        <div className="float-left name">
                                            Appointments
                                        </div>
                                        <div className="float-right name">
                                            {finalDate}
                                        </div>
                                    </div>
                                    <table className="table table-borderless">
                                        <thead className="text-center">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Schedule</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            {appointments
                                                .filter(
                                                    (appointment) =>
                                                        appointment.date ===
                                                        finalDate
                                                )
                                                .map((appointment) => (
                                                    <tr key={count++}>
                                                        <td>
                                                            {appointment.name}
                                                        </td>
                                                        <td>
                                                            {appointment.time}
                                                        </td>
                                                        <td>
                                                            <button className="btn submit-btn">
                                                                Visited
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDash;
