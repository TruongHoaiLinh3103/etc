import React, { Component } from 'react';
import "./RecruitmentBody.css";
import SearchRecruitmentBody from '../../Components/SearchRecruitmentBody/SearchRecruitmentBody';
class RecruitmentBody extends Component {
    render() {
        return (
            <div className='RecruitmentBody'>
                <div className='RecruitmentBody-backGround'>
                    <SearchRecruitmentBody/>
                </div>
                <div className='RecruitmentBody-staff'>
                    <div className='RecruitmentBody-staff_profile'>
                        <img src='https://www.etc.vn/resources/company/images/recruit1.jpg' alt=''></img>
                        <h3>Nhân viên phân tích nghiệp vụ - Dự án Epay</h3>
                    </div> 
                    <span></span>
                </div>
                <div className='RecruitmentBody-list'>
                    <div className='RecruitmentBody-list_detail'>
                        <h3>Vị trí tuyển dụng</h3>
                        <h3>Số lượng</h3>
                        <h3>Địa điểm làm việc</h3>
                    </div>
                    <div className='RecruitmentBody-list_detail'>
                        <p>Trưởng nhóm kế toán</p>
                        <p>1</p>
                        <p>Đang cập nhập</p>
                    </div>
                    <div className='RecruitmentBody-list_detail'>
                        <p>Nhân viên bảo hành, bảo trì</p>
                        <p>1</p>
                        <p>Đang cập nhập</p>
                    </div>
                    <div className='RecruitmentBody-list_detail'>
                        <p>.Net developer</p>
                        <p>1</p>
                        <p>Đang cập nhập</p>
                    </div>
                </div>
                <div className='RecruitmentBody-about'>
                    <h1>CÙNG ETC KIẾN TẠO TƯƠNG LAI</h1>
                    <p>ETC chắc chắn sẽ cho bạn: Cơ hội không ngừng sáng tạo, thách thức để khẳng định bản thân, và điều kiện để học hỏi, phát triển.</p>
                    <button>Tìm hiểu thêm về ETC<i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        );
    }
}

export default RecruitmentBody;