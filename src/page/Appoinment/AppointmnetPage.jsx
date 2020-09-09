import React, { useState } from "react";
import "./AppointmnetPage.css";
import image from "../../assets/Mask Group 1.png";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AvailableAppoinment from "../../component/AvailableAppoinment/AvailableAppoinment";
import Navbar from "../../component/Navbar/Navbar";

const AppointmnetPage = () => {
    const [date, setDate] = useState([new Date()]);
    const [errDate, setErrDate] = useState(null);

    let fixedDate = date.toLocaleString();
    let index = fixedDate.indexOf(",");
    let finalDate = fixedDate.slice(0, index);
    const handleDate = (dates) => {
        if (new Date() > dates) {
            setErrDate(true);
        } else {
            setErrDate(false);
            setDate(dates);
        }
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className="appoinment-page">
                <div
                    className="container d-flex align-items-center"
                    style={{ height: "100%" }}
                >
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <h1 style={{ marginBottom: "30px" }}>
                                Appointment
                            </h1>
                            <Calendar onChange={handleDate} calendarType="US" />
                            {errDate && (
                                <p className="err-date">
                                    Please Select Future Date to get Appointment
                                </p>
                            )}
                        </div>
                        <div className="col-md-6">
                            <img src={image} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <AvailableAppoinment date={finalDate} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default AppointmnetPage;
