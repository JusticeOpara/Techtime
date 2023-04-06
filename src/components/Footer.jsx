import React from "react"
import Twitter from '../../assets/twitter.png'
import discord from '../../assets/discord.png'
import Path14 from '../../assets/path14.png'
import Instargram from '../../assets/instargram.png'
import Youtube from '../../assets/youtube.png'
import TechTime from '../../assets/techtime.png'



export default function Footer() {

    return (

        <div className="footer-container" >

            <div className="footer-bottom">

                <div className="footer-segment">
                    <img className="tech-time" src={TechTime} alt="tech-tme" />
                    <p className="footer-text">
                        reach out to us on any of our social media networks
                    </p>


                    <div className="social-media-icon">
                        <img src={Twitter} className="mediaIcon" alt="social-media-image" />
                        <img src={Path14} className="mediaIcon" alt="social-media-image" />
                        <img src={Youtube} className="mediaIcon" alt="social-media-image" />
                        <img src={Instargram} className="mediaIcon" alt="social-media-image" />
                        <img src={discord} className="mediaIcon" alt="social-media-image" />
                    </div>

                </div>

                <div className="footer-segment">
                    <h3 className="footer-title">Useful Links</h3>

                    <li>home</li>
                    <li>about us</li>
                    <li>our courses</li>
                    <li>testimonal</li>
                    <li>our community</li>
                </div>

                <div className="footer-segment">
                    <h3 className="footer-title">Community</h3>
                    <li>help center</li>
                    <li>partners</li>
                    <li>suggestion</li>
                    <li>blog</li>
                    <li>newsletter</li>
                </div>

                <div className="footer-segment">
                    <h3 className="footer-title">Subscribe Us</h3>

                    <div className="footer-input">

                        <input placeholder="justice@gmail.com" />
                    </div>

                </div>

            </div>

        </div>

    )
}