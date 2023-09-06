import React, { Component } from 'react';
import './Customersandpartners.css';
class Customersandpartners extends Component {
    constructor(){
        super();
        this.state = {
            button: true
        }
        this.toggle = () => {
            this.setState({
                button: !this.state.button
            })
            console.log(this.state.button)
        }
    }
    render() {
        return (
            <div className='Customersandpartners'>
                <div className='Customersandpartners-btn'>
                    <h2>Khách hàng</h2>
                    <label className="switch-button" htmlFor="switch">
                        <div className="switch-outer" onClick={() => this.toggle()}>
                            <input id="switch" type="checkbox" />
                            <div className="button">
                            <span className="button-toggle"></span>
                            <span className="button-indicator"></span>
                            </div>
                        </div>
                    </label>
                    <h2>Đối tác</h2>
                </div>
            </div>
        );
    }
}

export default Customersandpartners;