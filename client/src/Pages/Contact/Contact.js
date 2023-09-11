import React, { Component } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import ContactBody from '../../Layouts/ContactBody/ContactBody';
class Contact extends Component {
    render() {
        return (
            <div style={{marginTop:"70px", overflow:"hidden"}}>
                <ContactBody/>
                <Footer />
            </div>
        );
    }
}

export default Contact;