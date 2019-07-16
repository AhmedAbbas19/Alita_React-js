import React, { Component } from 'react'
import './Statistics.css'

class Aboutus extends Component {

    render() {
        return (
            <div class="stat">
                <div class="container">
                    <h1 class="text-center">My Statistic</h1>
                    <div class="stat-bar">
                        <h5>Lorem Ipsum 88%</h5>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style={{width:88+"%"}}></div>
                        </div>
                    </div>
                    <div class="stat-bar">
                        <h5>Lorem Ipsum 100%</h5>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:100+"%"}}>

                            </div>
                        </div>
                    </div>
                    <div class="stat-bar">
                        <h5>Lorem Ipsum 78%</h5>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{width:78+"%"}}>

                            </div>
                        </div>
                    </div>
                    <div class="stat-bar">
                        <h5>Lorem Ipsum 60%</h5>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:60+"%"}}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Aboutus