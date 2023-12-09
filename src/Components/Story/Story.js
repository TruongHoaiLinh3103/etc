import React, { Component } from 'react';
import "./Story.css";
import History from '../History/History';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
class Story extends Component {
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
            <div className='Story grid1200'>
                <div className='Story-trademark'>
                    <div className='Story-trademark_detail' data-aos="fade-right">
                        <h1>Câu chuyện thương hiệu</h1>
                        <p>Từ khát khao đưa trí tuệ Việt 
                        phục vụ mọi thứ mà khách hàng cần 
                        về công nghệ thông tin, trong gần 
                        20 năm vừa qua, ETC đang vươn mình 
                        với những bước đi đầy táo bạo để 
                        trở thành nhà cung cấp hệ sinh 
                        thái công nghệ số dẫn đầu, đáp 
                        ứng nhu cầu không giới hạn của khách hàng.</p>
                        <button className="button4-1" onClick={() => this.pushETC()}>Tìm hiểu thêm</button>
                    </div>
                    <div className='Story-trademark_video' data-aos="fade-left">
                        <iframe width="670" height="371" 
                        src="https://www.youtube.com/embed/lazpis0co5o" 
                        title="ETC - Niềm tin đồng hành cùng giá trị!" 
                        frameBorder="0" allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; 
                        picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className='Story-history' data-aos="fade-down">
                    <History/>
                </div>
            </div>
        );
    }
}

export default withRouter(Story);