import React, { Component } from 'react';
import "./Technology.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
class Technology extends Component {
    componentDidMount(){
        AOS.init({duration: 2000});
    }
    render() {
        return (
            <div className='Technology'>
                <div className='Technologygrid1200 grid1200'>
                    <div className='Technologygrid1200-spinner'>
                        <span></span>
                        <span></span>
                        <img src='https://www.etc.vn/storage/circle.jpg' alt='' data-aos="zoom-in"/>
                    </div>
                    <div className='Technologygrid1200-title'>
                        <h2 data-aos="fade-up">ETC Technology Systems JSC</h2>
                        <h1 data-aos="fade-up">Nhà cung cấp giải pháp công nghệ đa lĩnh vực, đa dịch vụ</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Technology;