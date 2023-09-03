import React, { Component } from 'react';
import logo from "../../Assets/Img/etc-logo.png";
import { NavLink } from "react-router-dom";
import "./Navbars.css";
import '../../Style/grid.css';
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
                        <li className="Navbar-nav_ul__li"><NavLink to='/about'>Về Etc</NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/service'>Dịch vụ</NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/news'>Tin tức</NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/recruitment'>Tuyển dụng</NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/contact'>Liên hệ</NavLink></li>
                        <li className="Navbar-nav_ul__li"><NavLink to='/irera-etc' className="Irera_etc">Irera-Etc</NavLink></li>
                        <li className="Navbar-nav_ul__li"><i className="fa-solid fa-magnifying-glass"></i></li>
                        <li className="Navbar-nav_ul__li"><i className="fa-solid fa-earth-americas"></i></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbars;