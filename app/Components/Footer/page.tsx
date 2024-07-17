import "./footer.css"

export default function page(){
    return(
        <div className="footer">
            <div className="footerleft">
                <img src="peclogo.png" alt="" />
                <div>
                    <h1>PANIMALAR </h1>
                    <h3>ENGINEERING COLLEGE</h3>
                    <p>An Autonomous Institute</p>
                </div>
            </div>
            <div className="footercenter">
                <div className="footericon">
                <img src="./footerfacebook.png" alt="" />
                <img src="./footerinstagram.png" alt="" />
                <img src="./footeryoutube.png" alt="" />
                <img src="./footerlinkedin.png" alt="" />
                </div>
            <div className="line"></div>
            
            <div className="copyrights">
                <p>Copyright © 2024 Panimalar Engineering College. All Rights Reserved.</p>
            </div>
            </div>
            <div className="footerright">
                <div className="contacthead">
                    <h1>Contact Us</h1>
                </div>
                <div className="contactdetails">
                    <div className="detail">
                        <img id="footermobile" src="./footermobile.png" alt="" />
                        <p>+91-90438 91272 / 90438 90983</p>
                    </div>
                    <div className="detail">
                        <img id="footerphone" src="./footerphone.png" alt="" />
                        <p>+044 -26490404 / 0505 / 0717</p>
                    </div>
                    <div className="detail">
                        <img id="footermail" src="./footermail.png" alt="" />
                        <p>info@panimalar.ac.in</p>
                    </div>
                </div>
            </div>
        </div>
    )
}