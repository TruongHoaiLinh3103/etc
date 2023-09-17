import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./ContactBody.css";
import '../../Style/grid.css';
import { BRANCHESANDSERVICECENTERS } from './Data/BRANCHESANDSERVICECENTERS'
class ContactBody extends Component {
    render() {
        return (
            <div className='ContactBody grid'>
                <div className='ContactBody-container'>
                    <div className='ContactBody-item'>
                        <div className='ContactBody-item_title'>
                            <h3>Liên hệ với chúng tôi</h3>
                            <h1 className='ContactBody-item_title_h1'>Công ty cổ phần Hệ thống Công nghệ ETC</h1>
                        </div>
                        <img src='https://www.etc.vn/resources/company/images/dc-contact.svg' alt=''></img>
                    </div>
                    <div className='ContactBody-contact'>
                        <h3>Mail to:</h3>
                        <div className='ContactBody-contact_email'>
                            <li><NavLink to="mailto:eagleremlinh@gmail.com" target="_top">eagleremlinh@gmal.com</NavLink></li>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                        <p><b>Địa chỉ:</b></p>
                        <p>Số 2B1, Đầm Trấu, P. Bạch Đằng, Q. Hai Bà Trưng, Hà Nội.</p>
                        <p><b>Office:</b></p>
                        <p>Tầng 9, 10, 11, 19 tòa nhà 319 Bộ quốc phòng, số 63 Lê Văn Lương, Trung Hòa, Cầu Giấy, Hà Nội.</p>
                        <p><b>Số điện thoại:</b> +8424 39845754</p>
                        <p><b>Email:</b> sales@etc.vn</p>
                        <br/>
                        <div className='Item-icon'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div className='ContactBody-container'>
                    <div className='ContactBody-branch'>
                        <div className='ContactBody-branch_phone'>
                            <img src='https://www.etc.vn/resources/company/images/ic-phone.svg' alt=''></img>
                        </div>
                        <div className='ContactBody-branch_detail'>
                            <h1>Chi nhánh và Trung tâm dịch vụ</h1>
                            <div className='ContactBody-branch_detail_ok'>
                                {BRANCHESANDSERVICECENTERS.map((item) => {
                                    return(
                                        <div className='ContactBody-branch_detail_ok__li' key={item.id}>
                                            <p><b>{item.adress}</b></p>
                                            <p>{item.road}</p>
                                            <p>{item.phone}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='ContactBody-VietNam'>
                        <img src='https://www.etc.vn/resources/company/images/map.svg' alt=''/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactBody;