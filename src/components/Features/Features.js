import React, { Component } from 'react'
import axios from 'axios'
import './Features.css'
import img3 from '../../images/img3.jpg'
class Features extends Component {
    state = {
        features: []
    }
    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({
                features: res.data.features
            })
        })
    }
    render() {
        const { features } = this.state
        const myFeatures = features.map(feature => {
            return (
                <div key={feature.id} className="media">
                    <div className="media-left">
                        <i className={feature.icon_name}></i>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{feature.title}</h4>
                        <p>{feature.body}</p>
                    </div>
                </div>
            )
        });

        return (
            <div className="features">
                <div className="container">
                    <h2 className="h1 text-center">Features</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lorem sed velit fermentum lobortis. Fusce eu semper lacus, eget placerat mauris. Sed lectus tellus feugiat porttitor nulla. Sed porta magna vitae nisl vulputate lacinia.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img3} alt="persons" />
                        </div>
                        <div className="col-md-6">
                            {myFeatures}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Features