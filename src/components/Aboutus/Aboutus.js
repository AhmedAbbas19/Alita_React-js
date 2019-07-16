import React,{Component} from 'react'
import './Aboutus.css'
import img1 from '../../images/img1.jpg'

class Aboutus extends Component{
    state = {
        toggle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose .',
        is_history: false
    }
    clickGoal = (e) =>{
        this.setState({
            toggle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose .',
            is_history : false
        })
    }
    clickHistory = (e) =>{
        this.setState({
            toggle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            is_history : true
        })
    }
    render(){
        return (
            <div className="aboutus">
                <div className="container">
                    <h1 className="text-center">About Us</h1>
                    <div className="row">
                        <div className="col-md-7">
                            <ol className="breadcrumb">
                                <li className={this.state.is_history?'breadcrumb-item':'breadcrumb-item active'}onClick={this.clickGoal} name="our-goal">Our goal</li>
                                <li className={this.state.is_history?'breadcrumb-item active':'breadcrumb-item'} onClick={this.clickHistory} name="history">History</li>
                            </ol>
                            <p> {this.state.toggle} </p>
                        </div>
                        <div className="col-md-5">
                            <img src={img1} alt="person"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Aboutus