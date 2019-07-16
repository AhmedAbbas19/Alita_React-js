import React from 'react'
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import './Welcome.css'

const Welcome = () =>{
    return (
        <div className="welcome">
            <div className="container">
                <h2 className="h1 text-center">Welcome</h2>
                <div className="row">
                    <div className="item1 col-md-4 col-sm-12 text-center-small">
                        <h4>Proin vel enim lorem sed</h4>
                        <h3>Itaque earum rerum hic tenetur a sapiente</h3>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lorem sed velit fermentum lobortis. Fusce eu semper lacus, eget placerat mauris. Sed lectus tellus feugiat porttitor nulla. Sed porta magna vitae nisl vulputate lacinia.</p>
                        <div className="btn mybtn">Read More</div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src={img1} alt="guy"/>
                        <h5>Duis euismod massa ut sem fringilla</h5>
                        <p className="lead">consectetur adipiscing elit. Integer gravida mauris non mi gravida, at sollicitudin odio efficitur</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img src={img2} alt="two girls"/>
                        <h5>Duis euismod massa ut sem fringilla</h5>
                        <p className="lead">consectetur adipiscing elit. Integer gravida mauris non mi gravida, at sollicitudin odio efficitur</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Welcome