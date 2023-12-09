import React, { Component } from 'react';
import "./AboutB.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
class AboutB extends Component {
    componentDidMount(){
        AOS.init({
            duration: 2000,
            easing: "ease-out",
            delay: 100
        });
    }
    render() {
        return (
            <div className='AboutB' data-aos="fade-up">
                <img src='https://www.etc.vn/resources/company/images/ab1.svg' alt='' className='ab1'  data-aos="zoom-in"/>
                <div className='AboutB-img' data-aos="zoom-in">
                   <div className='AboutB-img_iam'>
                        <h1>Chúng tôi là</h1>
                   </div>
                    <div className='AboutB-img_etc'>
                        <img src='https://www.etc.vn/resources/company/images/logo-ab.svg' alt='' data-aos="zoom-in"/>
                    </div>
                </div>
                <img src='https://www.etc.vn/resources/company/images/ab2.svg' alt='' className='ab2' data-aos="zoom-in"/>
                <span className='ab3'></span>
                <span className='ab4'></span>
            </div>
        );
    }
}

export default AboutB;