import React, {Component} from 'react'
import Header from '../Header2/Header2.js'
import AboutUs from '../Aboutus/Aboutus.js'
import Statistics from '../Statistics/Statistics.js'
class About extends Component{
    render(){
        return(
            <div>
                <Header title='Knack'/>
                <AboutUs />
                <Statistics />
            </div>
        )
    }
}
export default About