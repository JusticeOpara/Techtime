import React from "react";
import ComImage from '../../assets/community (1).png'
import ComImage2 from '../../assets/community (2).png'
import ComImage3 from '../../assets/community (3).png'
import ComImage4 from '../../assets/community (4).png'
import ComImage5 from '../../assets/community (5).png'
import ComImage6 from '../../assets/community (6).png'
import ComImage7 from '../../assets/community (7).png'
import ComImage8 from '../../assets/community (8).png'
import ComImage9 from '../../assets/community (9).png'
import ComImage10 from '../../assets/community10.png'


export default function Community() {
    return (
        <div className="community-container">
            <div class="first-community-layout">
                <h4 >JOIN OUR COMMUNITY</h4>
                <h1>Are you  ready to connect with the future talent of the tech world</h1>
                <p>meet up with other techstars and grow together</p>
            </div>

            <div className="second-community-layout">
                <img src={ComImage} className="ComImage" alt="ComImage" />
                <img src={ComImage2} className="ComImage" alt="ComImage" />
                <img src={ComImage3} className="ComImage" alt="ComImage" />
                <img src={ComImage4} className="ComImage" alt="ComImage" />
                <img src={ComImage5} className="ComImage" alt="ComImage" />
                <img src={ComImage6} className="ComImage" alt="ComImage" />
                <img src={ComImage7} className="ComImage" alt="ComImage" />
                <img src={ComImage8} className="ComImage" alt="ComImage" />
                <img src={ComImage9} className="ComImage" alt="ComImage" />
                <img src={ComImage10} className="ComImage" alt="ComImage" /> 
            </div>





            {/* <p>meet up with other techstars and grow together</p> */}
        </div>
    )
}