import React, { Component } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import IrereetcBody from '../../Layouts/IreraetcBody/IrereetcBody';
class Ireraetc extends Component {
    render() {
        return (
            <div style={{marginTop:"70px", overflow:'hidden'}}>
                <IrereetcBody/>
                <Footer/>
            </div>
        );
    }
}

export default Ireraetc;