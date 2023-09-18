import React, { Component } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import Homebody from '../../Layouts/HomeBody/Homebody';
class Home extends Component {
    render() {
        return (
            <div style={{marginTop:"70px", overflow:'hidden'}}>
                <Homebody />
                <Footer/>
            </div>
        );
    }
}

export default Home;