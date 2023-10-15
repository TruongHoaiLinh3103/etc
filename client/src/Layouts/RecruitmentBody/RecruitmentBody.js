import React, { Component } from 'react';
import "./RecruitmentBody.css";
import SearchRecruitmentBody from '../../Components/SearchRecruitmentBody/SearchRecruitmentBody';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { RECRUITMENT } from './Data/RECRUITMENT';
class RecruitmentBody extends Component {
    componentDidMount(){
        AOS.init({
            duration: 2000,
            easing: "ease-out",
            delay: 100
        });
    }
    constructor(){
        super();
        this.pushETC = () => {
            this.props.history.push("/irera-etc")
        }
    }
    render() {
        return (
            <div className='RecruitmentBody'>
                <div className='RecruitmentBody-backGround' data-aos="zoom-in">
                    <SearchRecruitmentBody/>
                </div>
                <div className='RecruitmentBody-staff' data-aos="fade-up">
                    <div className='RecruitmentBody-staff_profile'>
                        <img src='https://www.etc.vn/resources/company/images/recruit1.jpg' alt=''></img>
                        <h3>Nhân viên phân tích nghiệp vụ - Dự án Epay</h3>
                    </div> 
                    <span></span>
                </div>
                <div className='RecruitmentBody-list'>
                    <div className='RecruitmentBody-list_detail' data-aos="fade-up">
                        <h3>Vị trí tuyển dụng</h3>
                        <h3>Số lượng</h3>
                        <h3>Địa điểm làm việc</h3>
                    </div>
                    {RECRUITMENT.map((item) => {
                        return(
                        <div className='RecruitmentBody-list_detail' data-aos="fade-up">
                            <p>{item.role}</p>
                            <p>{item.count}</p>
                            <p>{item.adress}</p>
                        </div>
                        )
                    })}
                </div>
                <div className='RecruitmentBody-about' data-aos="fade-down">
                    <h1 data-aos="fade-right">CÙNG ETC KIẾN TẠO TƯƠNG LAI</h1>
                    <p data-aos="fade-left">ETC chắc chắn sẽ cho bạn: Cơ hội không ngừng sáng tạo, thách thức để khẳng định bản thân, và điều kiện để học hỏi, phát triển.</p>
                    <button data-aos="fade-right" onClick={() => this.pushETC()}>Tìm hiểu thêm về ETC<i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        );
    }
}

export default withRouter(RecruitmentBody);