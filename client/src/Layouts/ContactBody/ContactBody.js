import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./ContactBody.css";
import '../../Style/grid.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BRANCHESANDSERVICECENTERS } from './Data/BRANCHESANDSERVICECENTERS'
class ContactBody extends Component {
    componentDidMount(){
        AOS.init({
            duration: 2000,
            easing: "ease-out",
            delay: 100
        });
    }
    render() {
        return (
            <div className='ContactBody grid'>
                <div className='ContactBody-container'>
                    <div className='ContactBody-item'>
                        <div className='ContactBody-item_title' data-aos="fade-right">
                            <h3>Liên hệ với chúng tôi</h3>
                            <h1 className='ContactBody-item_title_h1'>Công ty cổ phần Hệ thống Công nghệ ETC</h1>
                        </div>
                        <img src='https://www.etc.vn/resources/company/images/dc-contact.svg' alt='' data-aos="zoom-in"/>
                    </div>
                    <div className='ContactBody-contact' data-aos="fade-left">
                        <h3 data-aos="flip-right">Mail to:</h3>
                        <div className='ContactBody-contact_email' data-aos="flip-left">
                            <li><NavLink to="mailto:eagleremlinh@gmail.com" target="_top">eagleremlinh@gmal.com</NavLink></li>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                        <p data-aos="flip-right"><b>Địa chỉ:</b></p>
                        <p data-aos="flip-left">Số 2B1, Đầm Trấu, P. Bạch Đằng, Q. Hai Bà Trưng, Hà Nội.</p>
                        <p data-aos="flip-right"><b>Office:</b></p>
                        <p data-aos="flip-left">Tầng 9, 10, 11, 19 tòa nhà 319 Bộ quốc phòng, số 63 Lê Văn Lương, Trung Hòa, Cầu Giấy, Hà Nội.</p>
                        <p data-aos="flip-right"><b>Số điện thoại:</b> +8424 39845754</p>
                        <p data-aos="flip-left"><b>Email:</b> sales@etc.vn</p>
                        <br/>
                        <div className='Item-icon' data-aos="flip-right">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div className='ContactBody-container'>
                    <div className='ContactBody-branch' data-aos="fade-right">
                        <div className='ContactBody-branch_phone'>
                            <img src='https://www.etc.vn/resources/company/images/ic-phone.svg' alt='' data-aos="zoom-in"/>
                        </div>
                        <div className='ContactBody-branch_detail'>
                            <h1 data-aos="flip-up">Chi nhánh và Trung tâm dịch vụ</h1>
                            <div className='ContactBody-branch_detail_ok'>
                                {BRANCHESANDSERVICECENTERS.map((item) => {
                                    return(
                                        <div className='ContactBody-branch_detail_ok__li' key={item.id} data-aos="flip-right">
                                            <p><b>{item.adress}</b></p>
                                            <p>{item.road}</p>
                                            <p>{item.phone}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='ContactBody-VietNam' data-aos="fade-left">
                        <img src='https://www.etc.vn/resources/company/images/map.svg' alt=''/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactBody;