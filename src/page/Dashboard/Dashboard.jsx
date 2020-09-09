import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Sidebar from "../../component/Sidebar/Sidebar";
import DashboardBlock from "./DashboardBlock";

const Dashboard = () => {
    const [appointments, setAppointment] = useState([]);
    //const appointments = Appointment.appointmentList;
    const [loading, setLoading] = useState(true);

    let count = 1;

    const [selected, setSelected] = useState("Pending");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    useEffect(() => {
        fetch("https://radiant-badlands-05887.herokuapp.com/getPatientsInfo")
            .then((res) => res.json())
            .then((data) => {
                setAppointment(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="dash-board">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-sm-3 p-0">
                        <Sidebar />
                    </div>
                    <div className="col-lg-10 col-sm-9 dashboard-bg">
                        <div className="conatiner">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>Dashboard</h1>
                                </div>
                            </div>

                            {/* display info */}

                            <div className="row">
                                <DashboardBlock />
                            </div>

                            {/* table data show */}

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="app-table">
                                        <h2 className="name mb-5 mt-4">
                                            Recent Appointments
                                        </h2>
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
                                        <table className="table">
                                            <thead>
                                                <tr className="text-center">
                                                    <th scope="col">Sr. No</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Time</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Contact</th>
                                                    <th scope="col">
                                                        Prescription
                                                    </th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-borderless">
                                                {appointments.map(
                                                    (appointment) => (
                                                        <tr className="text-center">
                                                            <th scope="row">
                                                                {count++}
                                                            </th>
                                                            <td>
                                                                {
                                                                    appointment.date
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    appointment.time
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    appointment.name
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    appointment.phone
                                                                }
                                                            </td>
                                                            <td>
                                                                <button className="btn submit-btn">
                                                                    View
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button className="btn submit-btn">
                                                                    Pending
                                                                </button>

                                                                <select
                                                                    id="selected"
                                                                    className="btn bg-info text-white ml-3"
                                                                    onChange={
                                                                        handleSelect
                                                                    }
                                                                    value={
                                                                        selected
                                                                    }
                                                                >
                                                                    <option>
                                                                        Select
                                                                    </option>
                                                                    <option value="Pending">
                                                                        Pending
                                                                    </option>
                                                                    <option value="Approved">
                                                                        Approved
                                                                    </option>
                                                                    <option value="Cancelled">
                                                                        Cancelled
                                                                    </option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
