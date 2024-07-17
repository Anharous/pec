
import "./modules.css"
import Link from "next/link"

export default function page(){
    return(
        <div className="modulescontainer">
            <div className="modulefirst">
                <div className="modules">
                    <img src="./graduation-cap-solid.svg" alt="" />
                    <p>Academic</p>
                </div>
                <div className="modules">
                    <Link href='/Components/Attendence'><div className="link">
                    <img src="./moduleAttendance.svg" alt="" />
                    <p>Attendance</p>
                    </div></Link>
                </div>
                <div className="modules">
                    <Link href='/Components/Assignment'><div className="link">
                    <img src="./moduleAssignment.svg" alt="" />
                    <p>Assignment</p>
                    </div></Link>
                </div>
                <div className="modules">
                    <img src="./moduleDocument.svg" alt="" />
                    <p>Document</p>
                </div>
            </div>
            <div className="modulesecond">
                <div className="modules">
                    <img src="./moduleExam.svg" alt="" />
                    <p>Examination</p>
                </div>
                <div className="modules">
                    <img src="./moduleCommunication.svg" alt="" />
                    <p>Communication</p>
                </div>
                <div className="modules">
                    <img src="./moduleReport.svg" alt="" />
                    <p>Report</p>
                </div>
                <div className="modules">
                    <img src="./moduleSurvye.svg" alt="" />
                    <p>Survey</p>
                </div>

            </div>
        </div>
    )
}