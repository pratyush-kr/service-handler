import "./App.css";
import { Header } from "./Components/Header";
import { UserInputForm } from "./Components/UserInputForm";
import { Results } from "./Components/Results";
import { useState } from "react";

function App() {
    const [user, setUser] = useState("");
    let User = [
        {
            serviceid: "HXO13PLLJ",
            name: "Pratyush",
            problem: "SSD",
            serviced: "NO",
        },
        {
            serviceid: "HXO13PLLP",
            name: "Pratyush Kr",
            problem: "OS not opening",
            serviced: "NO",
        },
    ];
    let issues = [
        {
            name: "RAM",
            serviced: "NO",
            cost: 500,
        },
        {
            name: "SSD",
            serviced: "YES",
            cost: 10500,
        },
    ];
    const findService = (serviceID) => {
        for (var i = 0; i < User.length; i++)
            if (serviceID === User[i].serviceid) {
                setUser(User[i]);
            }
    };
    return (
        <div className="App">
            <Header />
            <header className="App-header">
                <UserInputForm findUser={findService} issues={issues} />
                <Results user={user} issues={issues} />;
            </header>
        </div>
    );
}

export default App;
