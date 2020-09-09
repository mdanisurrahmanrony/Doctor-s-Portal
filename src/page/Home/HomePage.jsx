import React from "react";
import "./HomePage.css";
import { withRouter } from "react-router-dom";
import image from "../../assets/Mask Group 1.png";
import Navbar from "../../component/Navbar/Navbar";

const HomePage = ({ history }) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="home-page">
                <div className="container banner">
                    <div
                        className="row d-flex align-items-center"
                        style={{ height: "100%" }}
                    >
                        <div className="col-md-6">
                            <h1 className="title">
                                Your New Smile Starts Here
                            </h1>
                            <p className="subtitle">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry’s standard dummy text ever since
                                the
                            </p>
                            <button
                                className="btn appoinment-btn"
                                onClick={() => history.push("/appointment")}
                            >
                                get appoinment
                            </button>
                        </div>
                        <div className="col-md-6">
                            <img src={image} alt="img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default withRouter(HomePage);
