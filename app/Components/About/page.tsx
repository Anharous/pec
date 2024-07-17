import "./about.css"

export default function page(){
    return(
       
        <div className="aboutpage">
            <div className="abouthead">
                <h1>About Panimalar</h1>
                <p>Panimalar Engineering College, a Christian Minority Institution of Higher Education governed by JAISAKTHI Educational Trust aims at imparting quality engineering education for the aspiring youth.</p>
                <p>The College is accreditated by National Board of Accreditation (NBA), New Delhi, approved by All India Council for Technical Education (AICTE) and recognized by UGC with 12(B) & 2(f) status. The college is located near Poonamallee, Chennai, and is well connected by road covering, Chennai, Kancheepuram and Thiruvallur districts. The Trust started Panimalar Engineering College in the year 2000 in accordance with the general policy of the Government of Tamilnadu. The policy emphasizes to give high priority to meet the demand for trained engineers for various industrial and development projects in the state of Tamilnadu and the rest of India.</p>
            </div>
            <div className="gap"></div>
            <div className="aboutphase">
                <div className="aboutpara">
                    <h1>Vision of the Institute</h1>
                    <p>To transform the budding engineers into academically excellent, highly intellectual and self disciplined engineering graduates to mould them as good citizens with the spirit of integrity and morality that would cater to the needs of our nation.</p>
                </div>
                <div className="aboutimg">
                    <img src="./aboutvission.jpeg" alt="mission" width="450px"/>
                </div>
            </div>
            <div className="gap"></div>
            <div className="aboutphasetwo">
                <div className="aboutimg">
                    <img src="./aboutmission.jpeg" alt="mission" />
                </div>
                <div className="aboutpara">
                    <h1>Mission of the Institute</h1>
                    <p>To impart quality education with high standards of excellence in engineering and technology.</p>
                    <p>To provide an excellent infrastructure in a serene and conducive atmosphere that would motivate the students in their pursuit of knowledge in the field of engineering and technology.</p>
                </div>
            </div>
            <div className="gap"></div>
            <div className="aboutphase">
                <div className="aboutpara">
                    <h1>Quality Policy</h1>
                    <p>The Institution strives to provide a High Quality Education and Training in Engineering, Science and Management for aspiring youth in the growth of Engineering Profession and Industry by</p>
                    <p>• Providing and Maintaining good learning environment and ambience for enhanced learning.</p>
                    <p>• Inculcating Professional Ethics, Standards and Morale through student career and personality development programs.</p>
                </div>
                <div className="aboutimg">
                    <img src="./aboutquality.jpg" alt="" />
                </div>
            </div>
            <div className="gap"></div>
            <div className="aboutphasetwo">
                <div className="aboutimg">
                    <img src="/aboutcampus.jpg" alt="" width={540}/>
                </div>
                <div className="aboutpara">
                    <h1>Our Campus</h1>
                    <p>This sprawling campus provides a holistic education in an ambience that makes no compromise on discipline, dedication and commitment. It strives to inculcate the spirit of learning in the campus offering state of art facilities to the students. The college ensures that the students who pass out of the college, turn out to be academically brilliant, morally upright and empowered individuals.</p>
                </div>
            </div>
            <div className="gap"></div>
        </div>
    )
}