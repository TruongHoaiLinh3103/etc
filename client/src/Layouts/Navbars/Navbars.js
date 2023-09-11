import React, { Component } from 'react';
import logo from "../../Assets/Img/etc-logo.png";
import { NavLink } from "react-router-dom";
import "./Navbars.css";
import '../../Style/grid.css';
import "../../Style/Basic.css";
import { SMALLINDUSTRYSOLUTIONS } from '../Footer/Data/SMALLINDUSTRYSOLUTIONS';
import { DIGITALTRANSFERFORBUSINESS } from '../Footer/Data/DIGITALTRANSFERFORBUSINESS';
import { INFORMATIONTECHNOLOGY } from '../Footer/Data/INFORMATIONTECHNOLOGY';
import { PROFESSIONALSCIENTIFICEQUIPMENT } from '../Footer/Data/PROFESSIONALSCIENTIFICEQUIPMENT';
import {SYSTEMINTEGRATION} from "../Footer/Data/SYSTEMINTEGRATION";
class Navbars extends Component {
    render() {
        return (
            <div className='Navbar grid'>
                <div className='Navbar-logo'>
                    <img src={logo} alt=''></img>
                </div>
                <nav className='Navbar-nav'>
                    <ul className='Navbar-nav_ul'>
                        <li className="Navbar-nav_ul__li"><NavLink to="/" exact={true}>Trang chủ</NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/about'>Về ETC</NavLink></li>
                        <li className="Navbar-nav_ul__li Navbar-nav_ul_service"><NavLink to='#'>Dịch vụ
                            <div className='Navbar-nav_ul_service__navbar grid'>
                            <div className='Service-navbar_item'>
                                <h3 className='Service-navbar_item_title'>GIẢI PHÁP CHUYÊN NGÀNH</h3>
                                {SMALLINDUSTRYSOLUTIONS.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to="#">{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className='Service-navbar_item'>
                                <h3 className='Service-navbar_item_title'>CHUYỂN ĐỔI SỐ CHO DOANH NGHIỆP</h3>
                                {DIGITALTRANSFERFORBUSINESS.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to="#">{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className='Service-navbar_item'>
                                <h3 className='Service-navbar_item_title'>CÔNG NGHỆ THÔNG TIN</h3>
                                {INFORMATIONTECHNOLOGY.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to="#">{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className='Service-navbar_item'>
                                <h3 className='Service-navbar_item_title'>THIẾT BỊ KHOA HỌC NGHIỆP VỤ</h3>
                                {PROFESSIONALSCIENTIFICEQUIPMENT.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to="#">{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className='Service-navbar_item'>
                                <h3 className='Service-navbar_item_title'>TÍCH HỢP HỆ THỐNG</h3>
                                {SYSTEMINTEGRATION.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to="#">{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                            </div>
                        </NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/recruitment'>Tuyển dụng</NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/contact'>Liên hệ</NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/irera-etc' className="Irera_etc">Irera-Etc</NavLink></li>
                        <li className="Navbar-nav_ul__li"><i className="fa-solid fa-magnifying-glass"></i></li>
                    </ul>

                    <input type="checkbox" hidden id="burger" />
                    <label for="burger" className="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <div className="nav__bars-box">
                        <label for="burger" className="navbar__overlay"></label>
                        <div className="navbar__body">
                            <ul className="bars__box-nav">
                                <li><i className="fa-solid fa-house"></i><NavLink to="/" exact={true}>Trang chủ</NavLink></li>
                                <li><i className="fa-solid fa-link"></i><NavLink to='/about'>Về ETC</NavLink></li>
                                <li><i className="fa-solid fa-question"></i><NavLink to='/contact'>Liên hệ</NavLink></li>
                                <li><i className="fa-solid fa-user"></i><NavLink to='/recruitment'>Tuyển dụng</NavLink></li>
                                <li><i class="fa-brands fa-github"></i><a href="/">Dịch vụ</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbars;