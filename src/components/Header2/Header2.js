import React,{Component} from 'react'

class Header2 extends Component {
    render(){
        return (
            <div className="header">
                <div className="overlay">
                    <div className="container text-center">
                        <h1>{this.props.title}</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header2
