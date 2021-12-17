import React from "react";

export const Results = (props) => {
    let i = 1;
    let headstyle = {
        color: "white",
    };
    let datastyle = {
        color: "green",
    };
    while (i) {
        return (
            <div>
                <h3>Your Services</h3>
                <hr />
                {props.user ? (
                    <div>
                        Name: {props.user.name}
                        <br />
                        Problem: {props.user.problem}
                        <br />
                        Serviced: {props.user.serviced}
                        <br />
                        <table className="table">
                            <thead>
                                <tr style={headstyle}>
                                    <th scope="col">#</th>
                                    <th scope="col">Issue</th>
                                    <th scope="col">Serviced</th>
                                    <th scope="col">Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.issues.map((issue) => {
                                    return (
                                        <tr style={datastyle} key={issue.name}>
                                            <th scope="row">{i++}</th>
                                            <td>{issue.name}</td>
                                            <td>{issue.serviced}</td>
                                            <td>{issue.cost}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>Nothing Here</div>
                )}
            </div>
        );
    }
};
