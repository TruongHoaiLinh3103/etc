import React, { Component } from 'react';
import "./SearchRecruitmentBody.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
class SearchRecruitmentBody extends Component {
    componentDidMount(){
        AOS.init({
            duration: 2000,
            easing: "ease-out",
            delay: 100
        });
    }
    render() {
        return (
            <div className='SearchRecruitmentBody' data-aos="zoom-out">
                <input type='text' placeholder='Từ khóa..' className='SearchRecruitmentBody-item'/>
                <select className='SearchRecruitmentBody-item'>
                    <option defaultValue="loaicongviec" select="select">-Loại công việc-</option>
                    <option defaultValue="itsoft">IT Software</option>
                    <option defaultValue="ithardware">IT Hardware</option>
                    <option defaultValue="infomationsecurity">Infomation Security</option>
                </select>
                <select className='SearchRecruitmentBody-item'>
                    <option defaultValue="loaihopdong" select="select">-Loại hợp đồng-</option>
                    <option defaultValue="contract">Contract</option>
                    <option defaultValue="freelance">Freelance</option>
                    <option defaultValue="fulltime">Full time</option>
                    <option defaultValue="internship">Internship</option>
                    <option defaultValue="parttime">Part time</option>
                </select>
                <select className='SearchRecruitmentBody-item'>
                    <option defaultValue="diadiem" select="select">-Địa điểm-</option>
                    <option defaultValue="hanoi">Hà nội</option>
                    <option defaultValue="tphcm">TP Hồ Chí Minh</option>
                    <option defaultValue="danang">Đà Nẵng</option>
                    <option defaultValue="cantho">Cần Thơ</option>
                </select>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        );
    }
}

export default SearchRecruitmentBody;