import React, { Component } from 'react';
import "./AboutB.css";
class AboutB extends Component {
    render() {
        return (
            <div className='AboutB'>
                <img src='https://www.etc.vn/resources/company/images/ab1.svg' alt='' className='ab1'></img>
                <div className='AboutB-img'>
                   <div className='AboutB-img_iam'>
                        <h1>Chúng tôi là</h1>
                   </div>
                    <div className='AboutB-img_etc'>
                        <img src='https://www.etc.vn/resources/company/images/logo-ab.svg' alt=''></img>
                    </div>
                </div>
                <img src='https://www.etc.vn/resources/company/images/ab2.svg' alt='' className='ab2'/>
                <span className='ab3'></span>
                <span className='ab4'></span>
            </div>
        );
    }
}

export default AboutB;