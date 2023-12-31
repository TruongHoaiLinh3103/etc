import React, { Component } from 'react';
import "./Environment.css";
import { ENVIRONMENT } from './Data/ENVIRONMENT';
import AOS from 'aos';
import 'aos/dist/aos.css';
class Environment extends Component {
    componentDidMount(){
        AOS.init({
            duration: 2000,
            easing: "ease-out",
            delay: 100
        });
    }
    render() {
        return (
            <div className='Environment grid1200'>
                <div className='Environment-title'>
                    <h2 data-aos="fade-left">Chúng tôi luôn nỗ lực hết mình cho môi 
                    trường làm việc vui vẻ, quan tâm, để CBNV 
                    luôn cảm thấy hạnh phúc khi làm việc.</h2>
                </div>
                <div className='Environment-detail'>
                    {
                        ENVIRONMENT.map((item) => {
                            return(
                                <div className='Environment-detail_item' key={item.id} data-aos="fade-up">
                                    <img src={item.img} alt='' />
                                    <h2>{item.title}</h2>
                                    <p>{item.paragraph}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Environment;