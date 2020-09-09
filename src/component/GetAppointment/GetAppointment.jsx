import React, { useState } from "react";
import "./GetAppointment.css";

import { useForm } from "react-hook-form";
import { useAppointment } from "../../Context-Api/AppointmentContext";

const GetAppointment = (props) => {
    const { name, time, space, id } = props.appointment;

    const [success, setSuccess] = useState(null);

    const appointnment = useAppointment();

    // handle appoint data form
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        appointnment.handleApointmentList(data);
        setSuccess("Successfully place your Appointment");
        reset();
    };

    const onChangeDate = () => props.value;

    return (
        <div className="col-md-4">
            <div className="get-appoinment">
                <h3 className="name"> {name} </h3>
                <h3 className="time"> {time} </h3>
                <h3 className="space"> {space} </h3>
                <button
                    className="btn book-btn"
                    data-toggle="modal"
                    data-target={`#app${id}`}
                >
                    Book Appointment
                </button>
            </div>

            {/* Modal */}

            <div
                className="modal fade"
                id={`app${id}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLongTitle"
                            >
                                {name}
                            </h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className="form-control mb-3"
                                    name="time"
                                    ref={register({ required: true })}
                                    defaultValue={time}
                                />
                                <input
                                    className="form-control mb-3"
                                    placeholder="Your Name"
                                    name="name"
                                    ref={register({ required: true })}
                                />
                                {errors.name && (
                                    <p className="err-msg">Name is Required</p>
                                )}

                                <input
                                    className="form-control mb-3"
                                    placeholder="Phone No"
                                    name="phone"
                                    ref={register({ required: true })}
                                />
                                {errors.phone && (
                                    <p className="err-msg">Phone is Required</p>
                                )}

                                <input
                                    className="form-control mb-3"
                                    placeholder="Your Email"
                                    name="email"
                                    ref={register({ required: true })}
                                />
                                {errors.email && (
                                    <p className="err-msg">Email is Required</p>
                                )}

                                <input
                                    className="form-control mb-3"
                                    onChange={onChangeDate}
                                    name="date"
                                    value={props.date}
                                    ref={register({ required: true })}
                                />

                                <div className="form-row mb-3">
                                    <div className="col-7">
                                        <select
                                            className="custom-select mr-sm-2"
                                            id="inlineFormCustomSelect"
                                            name="gender"
                                            ref={register({
                                                required: true,
                                            })}
                                        >
                                            <option defaultValue>Gender</option>
                                            <option defaultValue="1">
                                                Male
                                            </option>
                                            <option defaultValue="2">
                                                Female
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Age"
                                            name="age"
                                            ref={register({ required: true })}
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Weight"
                                            name="weight"
                                            ref={register({ required: true })}
                                        />
                                    </div>
                                </div>

                                <input
                                    className="form-control submit-btn"
                                    type="submit"
                                />
                            </form>
                        </div>
                        <div className="modal-footer">
                            {success && <p className="success"> {success} </p>}
                            <button
                                type="button"
                                data-dismiss="modal"
                                className="btn submit-btn"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetAppointment;
