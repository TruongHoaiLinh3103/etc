import React, { Component } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import "./ServicePage.css";
import { SMALLINDUSTRYSOLUTIONS } from '../../Layouts/Footer/Data/SMALLINDUSTRYSOLUTIONS';
import { DIGITALTRANSFERFORBUSINESS } from '../../Layouts/Footer/Data/DIGITALTRANSFERFORBUSINESS';
import { INFORMATIONTECHNOLOGY } from '../../Layouts/Footer/Data/INFORMATIONTECHNOLOGY';
import { PROFESSIONALSCIENTIFICEQUIPMENT } from '../../Layouts/Footer/Data/PROFESSIONALSCIENTIFICEQUIPMENT';
import { SYSTEMINTEGRATION } from '../../Layouts/Footer/Data/SYSTEMINTEGRATION';
import {
HashRouter as Router,
Switch,
Route,
} from "react-router-dom";
class ServicePage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        {SMALLINDUSTRYSOLUTIONS.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServicePage grid1400'>
                                        <img src={item.img} alt=''/>
                                    </div>
                                </Route>
                            )
                        })}
                        {DIGITALTRANSFERFORBUSINESS.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServicePage grid1400'>
                                        <img src={item.img} alt=''/>
                                    </div>
                                </Route>
                            )
                        })}
                        {INFORMATIONTECHNOLOGY.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServicePage grid1400'>
                                        <img src={item.img} alt=''/>
                                    </div>
                                </Route>
                            )
                        })}
                        {PROFESSIONALSCIENTIFICEQUIPMENT.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServicePage grid1400'>
                                        <img src={item.img} alt=''/>
                                    </div>
                                </Route>
                            )
                        })}
                        {SYSTEMINTEGRATION.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServicePage grid1400'>
                                        <img src={item.img} alt=''/>
                                    </div>
                                </Route>
                            )
                        })}
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default withRouter(ServicePage);