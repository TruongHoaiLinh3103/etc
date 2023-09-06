import React, { Component } from 'react';
import AboutB from '../../Components/AboutB/AboutB';
import Story from '../../Components/Story/Story';
import "./AboutBody.css";
import Thongso from '../../Components/Thongso/Thongso';
import People from '../../Components/People/People';
import Environment from '../../Components/Environment/Environment';
class AboutBody extends Component {
    render() {
        return (
            <div className='grid'>
                <AboutB/>
                <div className='Story'>
                    <Story/>
                </div>
                <Thongso/>
                <People/>
                <Environment/>
            </div>
        );
    }
}

export default AboutBody;