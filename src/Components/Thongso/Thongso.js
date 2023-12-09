import React, { Component } from 'react';
import "./Thongso.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
class Thongso extends Component {
    constructor(){
        super()
        this.state = {
            data: [
                {
                    id: 1,
                    h3: "3,86ha",
                    p: "Trung tâm Nghiên cứu và phát triển ITERA",
                },
                {
                    id: 2,
                    h3: "400+",
                    p: "Dự án công nghệ thông tin",
                },
                {
                    id: 3,
                    h3: "100+",
                    p: "Khách hàng lớn",
                },
                {
                    id: 4,
                    h3: "900+",
                    p: "Nhân sự",
                },
                {
                    id: 5,
                    h3: "3",
                    p: "Chi nhánh",
                },
                {
                    id: 6,
                    h3: "40+",
                    p: "Đối tác chiến lược",
                },
                {
                    id: 7,
                    h3: "500+",
                    p: "Chứng chỉ",
                },
                {
                    id: 8,
                    h3: "100+",
                    p: "Giải thưởng",
                }
            ]
        }
    }
    componentDidMount(){
        AOS.init({
            duration: 2000,
            easing: "ease-out",
            delay: 100
        });
    }
    render() {
        return (
            <div className='Thongso'>
                <h1 data-aos="fade-up">Năng lực của chúng tôi</h1>
                <div className='Thongso-item grid1200' data-aos="fade-up">
                    {this.state.data.map((item) => {
                        return(
                            <div className='Thongso-item_detail' key={item.id} data-aos="fade-down">
                                <h3>{item.h3}</h3>
                                <p>{item.p}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Thongso;