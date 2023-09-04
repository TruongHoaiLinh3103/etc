import React, { Component } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import RecruitmentBody from '../../Layouts/RecruitmentBody/RecruitmentBody';
class Recruitment extends Component {
    render() {
        return (
            <div>
                <RecruitmentBody />
                <Footer/>
            </div>
        );
    }
}

export default Recruitment;