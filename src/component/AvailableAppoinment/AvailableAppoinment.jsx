import React, { useState, useEffect } from "react";
import "./AvailableAppoinment.css";
import GetAppointment from "../GetAppointment/GetAppointment";

const AvailableAppoinment = ({ date }) => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://radiant-badlands-05887.herokuapp.com/schedules")
            .then((res) => res.json())
            .then((data) => {
                setAppointments(data);
                console.log(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div className="row">
                <p
                    className="text-center appoinment-date"
                    style={{ width: "100%" }}
                >
                    Available Appointments on {date}
                </p>
            </div>
            <div className="row available-appointment">
                {appointments.map((appointment) => (
                    <GetAppointment
                        key={appointment.id}
                        appointment={appointment}
                        date={date}
                    />
                ))}
            </div>
            <div className="row">
                <div className="col-md-12">
                    {loading && (
                        <div className="d-flex justify-content-center">
                            <div
                                className="spinner-grow text-info"
                                role="status"
                            ></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AvailableAppoinment;
