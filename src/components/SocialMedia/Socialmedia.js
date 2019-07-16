import React from 'react'
import {Link} from 'react-router-dom'
import './SocialMedia.css'
const Socialmedia = () => {
    return (
        <div className="social-media">
            <div className="container text-center">
                <div className="social">
                    <div className="ico facebook"><Link to="/" className="fa fa-facebook"></Link></div>
                    <div className="ico twitter"><Link to="/" className="fa fa-twitter"></Link></div>
                    <div className="ico youtube"><Link to="/" className="fa fa-youtube"></Link></div><br />
                    <div className="ico spotify"><Link to="/" className="fa fa-spotify"></Link></div>
                    <div className="ico linkedin"><Link to="/" className="fa fa-linkedin"></Link></div>
                </div>
            </div>
        </div>
    )
}
export default Socialmedia