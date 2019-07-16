import React, { Fragment, Component } from 'react'
import axios from 'axios'
import FadeIn from 'react-fade-in';
import './Portfolio.css'
import Header from '../Header2/Header2'

class Portfolio extends Component {

    state = {
        portfolio: [],
        category:'all'
    }

    clickHandler = (e) => {
        this.setState({
                category: e.target.getAttribute('data-filter')
            })
    }
    render(){
        axios.get('js/data.json').then(res => {this.setState({portfolio:res.data.portfolio})})
        
        const {portfolio} = this.state
        const getPortfolio = portfolio.map(portf => {
            if (portf.category.indexOf(this.state.category) > -1 || this.state.category === 'all'){
                return(
                    <div className="col-md-4 col-sm-6 filter" key={portf.id}>
                        <FadeIn>
                            <img src={portf.image} alt={portf.alt} />
                        </FadeIn>
                    </div>
                )
            }
            return false
            
        })
        return (
            <Fragment>
                <Header title='Knack'/>
                <div className="portfolio">
                    <div className="container">
                        <h2 className="h1 text-center">Portfolio</h2>
    
                        <ul className="list-unstyled text-center">
                            <li className={this.state.category==='all'?'button active':'button'} data-filter="all" onClick={this.clickHandler}>All</li>
                            <li className={this.state.category==='1'?'button active':'button'} data-filter="1" onClick={this.clickHandler}>Category 1</li>
                            <li className={this.state.category==='2'?'button active':'button'} data-filter="2" onClick={this.clickHandler}>Category 2</li>
                            <li className={this.state.category==='3'?'button active':'button'} data-filter="3" onClick={this.clickHandler}>Category 3</li>
                        </ul>
    
                        <div className="row text-center">
                            {getPortfolio}
                        </div>
    
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Portfolio