import React, { Fragment } from 'react'
import './Contact.css'
import Header from '../Header2/Header2'
const Contact = () => {
    return (
        <Fragment>
            <Header title='Knack'/>
            <div className="mail">
                <div className="container text-center">
                    <h2 className="h1">Contact Us</h2>
                    <form>
                        <input type="text" className="form-control split" placeholder="First Name" required />
                        <input type="text" className="form-control split" placeholder="Last Name" required />
                        <input type="text" className="form-control split" placeholder="Mobile Number" required />
                        <input type="email" className="form-control split" placeholder="Email" required />
                        <textarea rows="8" cols="80" className="form-control" placeholder="Message" style={{ height: "125px" }} />
                        <button type="button" name="button" className="form-control mybtn">Submit</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
export default Contact