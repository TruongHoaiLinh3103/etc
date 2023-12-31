import React, { Component } from 'react';
import './Customersandpartners.css';
import { CUSTOMER } from './Data/CUSTOMER.js';
import { PARTNERS } from './Data/PARTNERS.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
class Customersandpartners extends Component {
    constructor(){
        super();
        this.state = {
            button: false
        }
        this.toggle = () => {
            this.setState({
                button: !this.state.button
            })
        }
    }
    componentDidMount(){
        AOS.init({
            duration: 2000,
            easing: "ease-out",
            delay: 100
        });
    }
    render() {
        return (
            <div className='Customersandpartners'>
                <div className='Customersandpartners-btn' data-aos="fade-up">
                    <h2>Khách hàng</h2>
                    <label className="switch-button" htmlFor="switch">
                        <div className="switch-outer">
                            <input id="switch" type="checkbox"/>
                            <div className="button" onClick={() => this.toggle()}>
                                <span className="button-toggle" onClick={() => this.toggle()}></span>
                                <span className="button-indicator" onClick={() => this.toggle()}></span>
                            </div>
                        </div>
                    </label>
                    <h2>Đối tác</h2>
                </div>
                <div className='Customersandpartners-list' data-aos="fade-up">
                    {
                        this.state.button === false ?
                            CUSTOMER.map((item) => {
                                return(
                                    <div className='Customersandpartners-list_item' key={item.id}>
                                        <img src={item.img} alt='' />
                                    </div>
                                )
                            })
                        :
                            PARTNERS.map((item) => {
                                return(
                                    <div className='Customersandpartners-list_item' key={item.id}>
                                        <img src={item.img} alt='' />
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        );
    }
}

export default Customersandpartners;