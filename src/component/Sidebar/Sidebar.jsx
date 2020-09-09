import React from "react";
import "./Sidebar.css";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarCheck,
    faSignOutAlt,
    faFileAlt,
    faUserFriends,
    faBars,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="nav option-top">
                <li className="nav-item">
                    <Link className="nav-link dashboard-link" to="/dashboard">
                        <FontAwesomeIcon className="mr-3" icon={faBars} />
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link dashboard-link"
                        to="/appoinmentdashboard"
                    >
                        <FontAwesomeIcon
                            className="mr-3"
                            icon={faCalendarCheck}
                        />
                        Appointment
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link dashboard-link" to="/patients">
                        <FontAwesomeIcon
                            className="mr-3"
                            icon={faUserFriends}
                        />
                        Patients
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link dashboard-link"
                        to="/prescription"
                    >
                        <FontAwesomeIcon className="mr-3" icon={faFileAlt} />
                        Prescription
                    </Link>
                </li>
            </div>
            <div className="nav logout">
                <li className="nav-item">
                    <Link className="nav-link dashboard-link" to="/">
                        <FontAwesomeIcon className="mr-3" icon={faSignOutAlt} />
                        Logout
                    </Link>
                </li>
            </div>
        </div>
    );
};

export default Sidebar;
