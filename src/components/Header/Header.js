import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () =>{
    return (
        <div className="header">
            <div className="overlay">
                <div className="container text-center">
                    <h1>Knack</h1>
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <Link to='/'><i className="fa fa-phone"></i>  +01 111 222 3333</Link>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <Link to='/'><i className="fa fa-envelope"></i> mail@example.com</Link>
                        </div>
                    </div>

                    <div className="social">
                        <div className="ico facebook"><Link to="/" className="fa fa-facebook"></Link></div>
                        <div className="ico twitter"><Link to="/" className="fa fa-twitter"></Link></div>
                        <div className="ico youtube"><Link to="/" className="fa fa-youtube"></Link></div><br/>
                        <div className="ico spotify"><Link to="/" className="fa fa-spotify"></Link></div>
                        <div className="ico linkedin"><Link to="/" className="fa fa-linkedin"></Link></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Header