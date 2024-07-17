import "./header.css"

export default function page(){
    return(
        <div className="header">
            <div className="headerimg">
                <img src="/peclogo.png" alt="pec-logo" />
                <div>
                    <h1>PANIMALAR </h1>
                    <h3>ENGINEERING COLLEGE</h3>
                    <p>An Autonomous Institute</p>
                </div>
            </div>
            <div className="buttons">
                <button>Academic</button>
                <button>Attendance</button>
                <button>Documents</button>
                <button>Examination</button>
                <button id="login">Login</button>
            </div>

        </div>
    )
}