import React, { Component } from 'react';
import "../../Style/grid.css";
import "./Banner.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
class Banner extends Component {
    componentDidMount(){
        AOS.init({
            duration: 2000,
            easing: "ease-out",
            delay: 100
        });
    }
    render() {
        return (
            <div className='grid Banner'>
                <div className='Banner-detail'>
                    <div className='Banner-detail-profile' data-aos="fade-up">
                        <h1>Trung tâm nghiên cứu phát triển phần mềm ITERA</h1>
                        <p>ETC mang những mục tiêu lớn đang ở thế rồng cuộn, 
                        và ITERA sẽ là nơi mà các mục tiêu của ETC sẽ được 
                        triển khai nhanh hơn, với việc chuyển đổi số toàn 
                        diện bằng chất xám và những hệ thống hạ tầng 
                        kỹ thuật hiện đại nhất, ứng dụng những 
                        thành tựu công nghệ vào thực tiễn, 
                        đưa những ý tưởng sáng tạo và 
                        giấc mơ lớn trở thành hiện thực.</p>
                    </div>
                    <img src='https://www.etc.vn/resources/company/images/dc-itera.svg' alt='' />
                </div>
                <div className='Banner-data'>
                    <div className='Banner-data_item' data-aos="fade-right">
                        <h1>Tổng diện tích</h1>
                        <h2>3,86 ha</h2>
                        <p>Toạ lạc tại khu phần mềm, Khu CNC Hoà Lạc</p>
                    </div>
                    <div className='Banner-data_item' data-aos="fade-left">
                        <h1>Bao gồm</h1>
                        <h2>5 khu vực</h2>
                    </div>
                    <div className='Banner-data_item' data-aos="fade-right">
                        <h1>Tổng đầu tư</h1>
                        <h2>1.500 tỷ đồng</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;