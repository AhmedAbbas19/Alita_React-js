import React from 'react'
import './Contacts.css'
const Contacts = () => {
    return (
        <div className="contacts">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4">
                        <i className="fa fa-map-marker fa-2x"></i>
                        <p>Broome St, Canada, NY 10002, USA</p>
                    </div>
                    <div className="col-md-4">
                        <i className="fa fa-phone fa-2x"></i>
                        <p>+033 111 222 4567</p>
                    </div>
                    <div className="col-md-4">
                        <i className="fa fa-envelope fa-2x"></i>
                        <p>mail@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts