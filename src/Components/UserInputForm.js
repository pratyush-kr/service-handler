import React, { useState } from "react";

export const UserInputForm = (props) => {
    const [serviceID, setID] = useState("");
    const submit = (e) => {
        e.preventDefault();
        props.findUser(serviceID);
    };
    return (
        <div className="row g-3 align-items-center">
            <form onSubmit={submit}>
                <div className="col-auto">
                    <label htmlFor="serviceID" className="col-form-label">
                        Service Id:
                    </label>
                    <input
                        type="text"
                        id="serviceID"
                        className="form-control"
                        onChange={(e) => setID(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn btn-sm btn-success my-3"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
