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
    constructor(){
        super();
        this.state = {
            dichvu : false
        }
        this.dichvu = () => {
            this.setState({
                dichvu: !this.state.dichvu
            })
        }
    }
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
                        <li className="Navbar-nav_ul__li Navbar-nav_ul_service" onClick={() => this.dichvu()}><NavLink to='#'>Dịch vụ</NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/recruitment'>Tuyển dụng</NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/contact'>Liên hệ</NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/irera-etc' className="Irera_etc">Irera-Etc</NavLink></li>
                        <li className="Navbar-nav_ul__li Navbar-nav_ul__li_search"><i className="fa-solid fa-magnifying-glass">
                            <div className='Navbar-nav_ul__li_search_box'>
                                <input type='text' placeholder='Tìm kiếm'/>
                            </div>
                        </i></li>
                        <div className='Navbar-nav_ul_service__navbar grid' style={{display: this.state.dichvu ? "grid" : "none"}}>
                            <div className='Service-navbar_item'>
                                <h3 className='Service-navbar_item_title'>GIẢI PHÁP CHUYÊN NGÀNH</h3>
                                {SMALLINDUSTRYSOLUTIONS.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to={`/${item.link}`}>{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className='Service-navbar_item'>
                                <h3 className='Service-navbar_item_title'>CHUYỂN ĐỔI SỐ CHO DOANH NGHIỆP</h3>
                                {DIGITALTRANSFERFORBUSINESS.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to={`/${item.link}`}>{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className='Service-navbar_item'>
                                <h3 className='Service-navbar_item_title'>CÔNG NGHỆ THÔNG TIN</h3>
                                {INFORMATIONTECHNOLOGY.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to={`/${item.link}`}>{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className='Service-navbar_item'>
                                <h3 className='Service-navbar_item_title'>THIẾT BỊ KHOA HỌC NGHIỆP VỤ</h3>
                                {PROFESSIONALSCIENTIFICEQUIPMENT.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to={`/${item.link}`}>{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className='Service-navbar_item'>
                                <h3 className='Service-navbar_item_title'>TÍCH HỢP HỆ THỐNG</h3>
                                {SYSTEMINTEGRATION.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to={`/${item.link}`}>{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </ul>

                    <input type="checkbox" hidden id="burger" />
                    <label htmlFor="burger" className="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <div className="nav__bars-box">
                        <label htmlFor="burger" className="navbar__overlay"></label>
                        <div className="navbar__body">
                            <ul className="bars__box-nav">
                                <li><i className="fa-solid fa-house"></i><NavLink to="/" exact={true}>Trang chủ</NavLink></li>
                                <li><i className="fa-solid fa-link"></i><NavLink to='/about'>Về ETC</NavLink></li>
                                <li><i className="fa-solid fa-question"></i><NavLink to='/contact'>Liên hệ</NavLink></li>
                                <li><i className="fa-solid fa-user"></i><NavLink to='/recruitment'>Tuyển dụng</NavLink></li>
                                <li><i className="fa-brands fa-github"></i><a href="/">Dịch vụ</a></li>
                                <li className="Navbar-nav_ul__li"><NavLink to='/irera-etc' className="Irera_etc">Irera-Etc</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbars;