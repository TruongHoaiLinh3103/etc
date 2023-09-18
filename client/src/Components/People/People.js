import React, { Component } from 'react';
import './People.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
class People extends Component {
    componentDidMount(){
        AOS.init({
            duration: 2000,
            easing: "ease-out",
            delay: 100
        });
    }
    render() {
        return (
            <div className='People'>
                <h2 data-aos="fade-down">Con người ETC</h2>
                <div className='people_box'></div>
                <div className='People-detail grid1200'>
                    <div className='People-detail_succses' data-aos="fade-right">
                        <h3>Thành công cùng nhau</h3>
                        <p>ETC là một tập thể của những 
                        con người trẻ, kỷ luật và nhiệt 
                        huyết. Chúng tôi chiến đấu hết 
                        mình, không ngừng thử nghiệm 
                        và sáng tạo.</p>
                    </div>
                    <div className='People-detail_video' data-aos="fade-left">
                        <iframe
                        src="https://www.youtube.com/embed/KAJTOZVQP4U" 
                        title="ETC - Nơi tôi sẽ trở thành một kỹ sư công nghệ!" 
                        frameBorder="0" allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; 
                        picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default People;