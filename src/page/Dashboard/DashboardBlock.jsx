import React from "react";

const DashboardBlock = () => {
    return (
        <>
            <div className="col-lg-3 mb-2 col-sm-6">
                <div className="title-box d-flex align-items-center">
                    <h5 className="number mr-4">10</h5>
                    <h5 className="d-title ">
                        Pending <br /> Appointment
                    </h5>
                </div>
            </div>
            <div className="col-lg-3 mb-2 col-sm-6">
                <div className="title-box title-box-blue d-flex align-items-center">
                    <h5 className="number mr-4">10</h5>
                    <h5 className="d-title ">
                        Today's <br /> Appointment
                    </h5>
                </div>
            </div>
            <div className="col-lg-3 mb-2 col-sm-6">
                <div className="title-box title-box-green d-flex align-items-center">
                    <h5 className="number mr-4">10</h5>
                    <h5 className="d-title ">
                        Total <br /> Appointment
                    </h5>
                </div>
            </div>
            <div className="col-lg-3 mb-2 col-sm-6">
                <div className="title-box title-box-yellow d-flex align-items-center">
                    <h5 className="number mr-4">10</h5>
                    <h5 className="d-title ">
                        Total <br /> Patients
                    </h5>
                </div>
            </div>
        </>
    );
};

export default DashboardBlock;
