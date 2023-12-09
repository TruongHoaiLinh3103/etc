import React, { Component } from 'react';
import "./Product.css";
import { SMALLINDUSTRYSOLUTIONS } from '../../Layouts/Footer/Data/SMALLINDUSTRYSOLUTIONS';
import { DIGITALTRANSFERFORBUSINESS } from '../../Layouts/Footer/Data/DIGITALTRANSFERFORBUSINESS';
import { INFORMATIONTECHNOLOGY } from '../../Layouts/Footer/Data/INFORMATIONTECHNOLOGY';
import { PROFESSIONALSCIENTIFICEQUIPMENT } from '../../Layouts/Footer/Data/PROFESSIONALSCIENTIFICEQUIPMENT';
import { SYSTEMINTEGRATION } from '../../Layouts/Footer/Data/SYSTEMINTEGRATION';
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
class Product extends Component {
    componentDidMount(){
        AOS.init({
            duration: 2000,
            easing: "ease-out",
            delay: 100
        });
    }
    render() {
        return (
            <div className='grid1200 Product' id='dichVu'>
                <div className='Product-item' data-aos="fade-right">
                    <h3>Tiên phong dẫn đầu về công nghệ</h3>
                    <h2>Khám phá hệ sinh thái giải pháp số đa dạng</h2>
                </div>
                <div className='Product-detail' data-aos="fade-up">
                    <div className="Product-detail_box">
                        <article className="Product-detail_box_card">
                            <h1>Giải pháp chuyên ngành</h1>
                            <div className='box-card-detail'>
                                <div className='box-card-detail_h3'>
                                    <h3>GIẢI PHÁP CHUYÊN NGÀNH</h3>
                                </div>
                                {SMALLINDUSTRYSOLUTIONS.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to={`/${item.link}`}>{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </article>
                        <article className="Product-detail_box_card">
                            <h1>Chuyển đổi số doanh nghiệp</h1>
                            <div className='box-card-detail'>
                                <div className='box-card-detail_h3'>
                                    <h3>CHUYỂN ĐỔI SỐ CHO DOANH NGHIỆP</h3>
                                </div>
                                {DIGITALTRANSFERFORBUSINESS.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to={`/${item.link}`}>{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </article>
                        <article className="Product-detail_box_card">
                            <h1>Công nghệ thông tin</h1>
                            <div className='box-card-detail'>
                                <div className='box-card-detail_h3'>
                                    <h3>CÔNG NGHỆ THÔNG TIN</h3>
                                </div>
                                {INFORMATIONTECHNOLOGY.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to={`/${item.link}`}>{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </article>
                        <article className="Product-detail_box_card">
                            <h1>Thiết bị khoa học nghiệp vụ</h1>
                            <div className='box-card-detail'>
                                <div className='box-card-detail_h3'>
                                    <h3>THIẾT BỊ KHOA HỌC NGHIỆP VỤ</h3>
                                </div>
                                {PROFESSIONALSCIENTIFICEQUIPMENT.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to={`/${item.link}`}>{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </article>
                        <article className="Product-detail_box_card">
                            <h1>Tích hợp hệ thống</h1>
                            <div className='box-card-detail'>
                                <div className='box-card-detail_h3'>
                                    <h3>TÍCH HỢP HỆ THỐNG</h3>
                                </div>
                                {SYSTEMINTEGRATION.map((item) => {
                                    return(
                                        <ul key={item.id}>
                                            <li><NavLink to={`/${item.link}`}>{item.label}</NavLink></li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;