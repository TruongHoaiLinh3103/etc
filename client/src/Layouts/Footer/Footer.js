import React, { Component } from 'react';
import "../../Style/grid.css";
import "./Footer.css";
import logo from '../../Assets/Img/logo.svg';
import { NavLink } from "react-router-dom";
import { DIGITALTRANSFERFORBUSINESS } from './Data/DIGITALTRANSFERFORBUSINESS';
import { INFORMATIONTECHNOLOGY } from './Data/INFORMATIONTECHNOLOGY';
import { PROFESSIONALSCIENTIFICEQUIPMENT } from './Data/PROFESSIONALSCIENTIFICEQUIPMENT';
import { SMALLINDUSTRYSOLUTIONS } from './Data/SMALLINDUSTRYSOLUTIONS';
import { SYSTEMINTEGRATION } from './Data/SYSTEMINTEGRATION';
class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <div className='grid Footer-body'>
                    <div className='Footer-body_item'>
                        <img src={logo} alt=''></img>
                    </div>
                    <div className='Footer-body_item'>
                        <h3 className='Footer-body_item_title'>GIẢI PHÁP CHUYÊN NGÀNH</h3>
                        {SMALLINDUSTRYSOLUTIONS.map((item) => {
                            return(
                                <ul key={item.id}>
                                    <li><NavLink to="#">{item.label}</NavLink></li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className='Footer-body_item'>
                        <h3 className='Footer-body_item_title'>CHUYỂN ĐỔI SỐ CHO DOANH NGHIỆP</h3>
                        {DIGITALTRANSFERFORBUSINESS.map((item) => {
                            return(
                                <ul key={item.id}>
                                    <li><NavLink to="#">{item.label}</NavLink></li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className='Footer-body_item'>
                        <h3 className='Footer-body_item_title'>CÔNG NGHỆ THÔNG TIN</h3>
                        {INFORMATIONTECHNOLOGY.map((item) => {
                            return(
                                <ul key={item.id}>
                                    <li><NavLink to="#">{item.label}</NavLink></li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className='Footer-body_item'>
                        <h3 className='Footer-body_item_title'>THIẾT BỊ KHOA HỌC NGHIỆP VỤ</h3>
                        {PROFESSIONALSCIENTIFICEQUIPMENT.map((item) => {
                            return(
                                <ul key={item.id}>
                                    <li><NavLink to="#">{item.label}</NavLink></li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className='Footer-body_item'>
                        <h3 className='Footer-body_item_title'>TÍCH HỢP HỆ THỐNG</h3>
                        {SYSTEMINTEGRATION.map((item) => {
                            return(
                                <ul key={item.id}>
                                    <li><NavLink to="#">{item.label}</NavLink></li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
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
                        <p>© ETC 2022</p>
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