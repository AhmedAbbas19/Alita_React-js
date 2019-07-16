import React from 'react'
import './Services.css'
const Services = () => {
    return (
        <div className="services">
            <div className="container text-center">
                <h2 className="h1">Services</h2>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="item">
                            <i className="fa fa-cogs fa-3x"></i>
                            <h3>Fugiat Quo</h3>
                            <h5>Scelerisque Praesent</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="item">
                            <i className="fa fa-users fa-3x"></i>
                            <h3>Voluptas</h3>
                            <h5>Scelerisque Praesent</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="item">
                            <i className="fa fa-television fa-3x"></i>
                            <h3>Quo fugiat</h3>
                            <h5>Scelerisque Praesent</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="item">
                            <i className="fa fa-id-card-o fa-3x"></i>
                            <h3>Voluptas</h3>
                            <h5>Scelerisque Praesent</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services