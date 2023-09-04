import React, { Component } from 'react';
import { SMALLINDUSTRYSOLUTIONS } from '../../Layouts/Footer/Data/SMALLINDUSTRYSOLUTIONS';
import { DIGITALTRANSFERFORBUSINESS } from '../../Layouts/Footer/Data/DIGITALTRANSFERFORBUSINESS';
import { INFORMATIONTECHNOLOGY } from '../../Layouts/Footer/Data/INFORMATIONTECHNOLOGY';
import { PROFESSIONALSCIENTIFICEQUIPMENT } from '../../Layouts/Footer/Data/PROFESSIONALSCIENTIFICEQUIPMENT';
import { SYSTEMINTEGRATION } from '../../Layouts/Footer/Data/SYSTEMINTEGRATION';
import { NavLink } from "react-router-dom";
import logo from '../../Assets/Img/logo.svg';
import "./Service.css"
class Services extends Component {
    render() {
        return (
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
        );
    }
}

export default Services;