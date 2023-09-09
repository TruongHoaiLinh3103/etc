import React, { Component } from 'react';
import "./Story.css";
import History from '../History/History';
class Story extends Component {
    render() {
        return (
            <div className='Story grid1200'>
                <div className='Story-trademark'>
                    <div className='Story-trademark_detail'>
                        <h1>Câu chuyện thương hiệu</h1>
                        <p>Từ khát khao đưa trí tuệ Việt 
                        phục vụ mọi thứ mà khách hàng cần 
                        về công nghệ thông tin, trong gần 
                        20 năm vừa qua, ETC đang vươn mình 
                        với những bước đi đầy táo bạo để 
                        trở thành nhà cung cấp hệ sinh 
                        thái công nghệ số dẫn đầu, đáp 
                        ứng nhu cầu không giới hạn của khách hàng.</p>
                        <button className="button4-1">Tìm hiểu thêm</button>
                    </div>
                    <div className='Story-trademark_video'>
                        <iframe width="670" height="371" 
                        src="https://www.youtube.com/embed/lazpis0co5o" 
                        title="ETC - Niềm tin đồng hành cùng giá trị!" 
                        frameBorder="0" allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; 
                        picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <div className='Story-history'>
                    <History/>
                </div>
            </div>
        );
    }
}

export default Story;