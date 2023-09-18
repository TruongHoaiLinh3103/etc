import React, { Component } from 'react';
import "../../Style/grid.css";
import "./Footer.css";
import Services from '../../Components/Services/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
class Footer extends Component {
    componentDidMount(){
        AOS.init({
            duration: 2000,
            easing: "ease-out",
            delay: 100
        });
    }
    render() {
        return (
            <div className='Footer' data-aos="fade-up">
                <Services/>
                <div className='grid Footer-end'>
                    <div className='Footer-end_item'>
                        <p>Trụ sở:</p>
                        <p>Số 2B1, Đầm Trấu, P. Bạch Đằng, Q. Hai Bà Trưng, Hà Nội.</p>
                    </div>
                    <div className='Footer-end_item'>
                        <p>Văn phòng công ty:</p>
                        <p>Tầng 9 - 20 Toà nhà 319, số 63 Lê Văn Lương, phường Trung Hoà, quận Cầu Giấy, thành phố Hà Nội.</p>
                    </div>
                    <div className='Footer-end_item'>
                        <p>Điện thoại: +8424 39845754</p>
                        <p>Email: sales@etc.vn</p>
                    </div>
                    <div className='Footer-end_item Footer-end_item_icon'>
                        <p className='Footer-end_item_icon_p'>© ETC 2022</p>
                        <div className='Item-icon'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;