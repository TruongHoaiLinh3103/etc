import React, { Component } from 'react';
import { SERVICEDETAIL } from "./Data/SERVICEDETAIL";
import { SMALLINDUSTRYSOLUTIONS } from '../../Layouts/Footer/Data/SMALLINDUSTRYSOLUTIONS';
import { DIGITALTRANSFERFORBUSINESS } from '../../Layouts/Footer/Data/DIGITALTRANSFERFORBUSINESS';
import { INFORMATIONTECHNOLOGY } from '../../Layouts/Footer/Data/INFORMATIONTECHNOLOGY';
import { PROFESSIONALSCIENTIFICEQUIPMENT } from '../../Layouts/Footer/Data/PROFESSIONALSCIENTIFICEQUIPMENT';
import { SYSTEMINTEGRATION } from '../../Layouts/Footer/Data/SYSTEMINTEGRATION';
import "./ServiceDetail.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
class ServiceDetail extends Component {
    componentDidMount(){
        AOS.init({duration: 2000});
    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        {SMALLINDUSTRYSOLUTIONS.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServiceDetail'>
                                        <h3 data-aos="fade-right">{item.label} gồm có:</h3>
                                        <div className='ServiceDetail-box'>
                                            {item.id === 1 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id < 12 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                            {item.id === 2 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 11 && children.id < 16 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                            {item.id === 3 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 15 && children.id < 20 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </Route>
                            )
                        })}
                        {DIGITALTRANSFERFORBUSINESS.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServiceDetail'>
                                        <h3 data-aos="fade-right">{item.label} gồm có:</h3>
                                        <div className='ServiceDetail-box'>
                                            {item.id === 1 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 19 && children.id < 22 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                            {item.id === 2 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 21 && children.id < 24 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                            {item.id === 3 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 23 && children.id < 29 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                            {item.id === 4 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 28 && children.id < 31 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </Route>
                            )
                        })}
                        {INFORMATIONTECHNOLOGY.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServiceDetail'>
                                        <h3 data-aos="fade-right">{item.label} gồm có:</h3>
                                        <div className='ServiceDetail-box'>
                                            {item.id === 1 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 30 && children.id < 37 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </Route>
                            )
                        })}
                        {PROFESSIONALSCIENTIFICEQUIPMENT.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServiceDetail'>
                                        <h3 data-aos="fade-right" style={{
                                            display: item.id === 3 || item.id === 4 ? "none" : ""
                                        }}>{item.label} gồm có:</h3>
                                        <div className='ServiceDetail-box'>
                                            {item.id === 1 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 36 && children.id < 43 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                            {item.id === 2 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 42 && children.id < 47 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </Route>
                            )
                        })}
                        {SYSTEMINTEGRATION.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServiceDetail'>
                                        <h3 data-aos="fade-right" style={{
                                            display: item.id === 1 || item.id === 3 || item.id === 4 || item.id === 7 ? "none" : ""
                                        }}>{item.label} gồm có:</h3>
                                        <div className='ServiceDetail-box'>
                                            {item.id === 2 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 46 && children.id < 50 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                            {item.id === 5 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 49 && children.id < 53 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                            {item.id === 6 && 
                                                SERVICEDETAIL.map((children) => {
                                                    return(
                                                        children.id > 52 &&
                                                        <div className="ServiceDetail-item" key={children.id} data-aos="fade-up">
                                                            <div style={{
                                                                overflow: "hidden"
                                                            }}>
                                                                <img src={children.img} alt=''/>
                                                            </div>
                                                            <div style={{
                                                                flexBasis: "100px"
                                                            }}>
                                                                <h4>{children.title}</h4>
                                                            </div>
                                                            {children.p1 ? <p>{children.p1}</p> : ""}
                                                            {children.p2 ? <p>{children.p2}</p> : ""}
                                                            {children.p3 ? <p>{children.p3}</p> : ""}
                                                            {children.p4 ? <p>{children.p4}</p> : ""}
                                                            {children.p5 ? <p>{children.p5}</p> : ""}
                                                            {children.p6 ? <p>{children.p6}</p> : ""}
                                                            {children.p7 ? <p>{children.p7}</p> : ""}
                                                            {children.p8 ? <p>{children.p8}</p> : ""}
                                                            {children.p9 ? <p>{children.p9}</p> : ""}
                                                            {children.p10 ? <p>{children.p10}</p> : ""}
                                                            {children.p11 ? <p>{children.p11}</p> : ""}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </Route>
                            )
                        })}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default ServiceDetail;