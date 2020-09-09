import React, { createContext, useContext } from "react";

const appointmentContext = createContext();
const AppointmentProvider = (props) => {
    const handleApointmentList = (list) => {
        fetch("https://radiant-badlands-05887.herokuapp.com/patientsInfo", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(list),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <appointmentContext.Provider value={{ handleApointmentList }}>
            {props.children}
        </appointmentContext.Provider>
    );
};

export const useAppointment = () => {
    return useContext(appointmentContext);
};

export default AppointmentProvider;
