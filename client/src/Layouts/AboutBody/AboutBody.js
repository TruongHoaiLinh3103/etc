import React, { Component } from 'react';
import AboutB from '../../Components/AboutB/AboutB';
import Story from '../../Components/Story/Story';
import "./AboutBody.css";
import Thongso from '../../Components/Thongso/Thongso';
class AboutBody extends Component {
    render() {
        return (
            <div className='grid'>
                <AboutB/>
                <div className='Story' style={{margin: "0px"}}>
                    <Story/>
                </div>
                <Thongso/>
            </div>
        );
    }
}

export default AboutBody;