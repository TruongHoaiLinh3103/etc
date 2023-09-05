import React, { Component } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import AboutBody from '../../Layouts/AboutBody/AboutBody';
class About extends Component {
    render() {
        return (
            <div style={{marginTop:"70px"}}>
                <AboutBody/>
                <Footer/>
            </div>
        );
    }
}

export default About;