import React, {Component} from 'react'
import Welcome from './../Welcome/Welcome.js'
import Services from './../Services/Services.js'
import Features from './../Features/Features.js'
import Header from './../Header/Header.js'

class Index extends Component{
    render(){
        return(
            <div>
                <Header />
                <Welcome />
                <Services />
                <Features />
            </div>
        )
    }
}
export default Index