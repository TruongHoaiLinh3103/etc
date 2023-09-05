import React, { Component } from 'react';
import AboutB from '../../Components/AboutB/AboutB';
import Story from '../../Components/Story/Story';
import "./AboutBody.css";
class AboutBody extends Component {
    render() {
        return (
            <div className='grid'>
                <AboutB/>
                <div className='Story'>
                    <Story/>
                </div>
            </div>
        );
    }
}

export default AboutBody;