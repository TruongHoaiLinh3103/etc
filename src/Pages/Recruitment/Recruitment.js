import React, { Component } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import RecruitmentBody from '../../Layouts/RecruitmentBody/RecruitmentBody';
class Recruitment extends Component {
    render() {
        return (
            <div style={{marginTop:"70px", overflow:'hidden'}}>
                <RecruitmentBody />
                <Footer/>
            </div>
        );
    }
}

export default Recruitment;