import React, { Component } from 'react';
import "./Irera.css";
import "../Story/Story.css";
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import AOS from 'aos';
import 'aos/dist/aos.css';
class Irera extends Component {
    constructor(){
        super();
        this.nextIrare = () => {
            this.props.history.push("/irera-etc")
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
            <div className='Irera grid1200' data-aos="fade-up">
                <img src='https://www.etc.vn/resources/company/images/dc-itera.svg' alt=''/>
                <div className='Irera-p' data-aos="fade-left">
                    <h2>Trung tâm nghiên cứu phát triển phần mềm ITERA</h2>
                    <button className="button4-1" onClick={() => this.nextIrare()}>Tìm hiểu thêm</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Irera);