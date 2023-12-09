import React, { Component } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import "./ServicePage.css";
import { SMALLINDUSTRYSOLUTIONS } from '../../Layouts/Footer/Data/SMALLINDUSTRYSOLUTIONS';
import { DIGITALTRANSFERFORBUSINESS } from '../../Layouts/Footer/Data/DIGITALTRANSFERFORBUSINESS';
import { INFORMATIONTECHNOLOGY } from '../../Layouts/Footer/Data/INFORMATIONTECHNOLOGY';
import { PROFESSIONALSCIENTIFICEQUIPMENT } from '../../Layouts/Footer/Data/PROFESSIONALSCIENTIFICEQUIPMENT';
import { SYSTEMINTEGRATION } from '../../Layouts/Footer/Data/SYSTEMINTEGRATION';
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
HashRouter as Router,
Switch,
Route,
} from "react-router-dom";
class ServicePage extends Component {
    constructor(){
        super();
        this.nextContact = () => {
            this.props.history.push("/contact")
        }
    }
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
                                    <div className='ServicePage grid1400'>
                                        <img src={item.img} alt=''/>
                                        <div className='grid1200 ServicePage-body'>
                                            <ul className='ServicePage-body-home' data-aos="fade-right">
                                                <li><NavLink to="/"><i className="fa-solid fa-house"></i> Trang chủ</NavLink></li>
                                                <li><i className="fa-solid fa-angle-right"></i></li>
                                                <li>Giải pháp chuyên nghành</li>
                                                <li><i className="fa-solid fa-angle-right"></i></li>
                                                <li>{item.label}</li>
                                            </ul>
                                            <div className='ServicePage-body-box'>
                                                <h3 data-aos="fade-right">{item.label}</h3>
                                                <p data-aos="fade-left">{item.p1}</p>
                                            </div>
                                            <p data-aos="fade-up">{item.p2}</p>
                                            <button data-aos="fade-right" onClick={() => this.nextContact()}>Liên hệ để biết thêm thông tin chi tiết >></button>
                                            <ServiceDetail/>
                                        </div>
                                    </div>
                                </Route>
                            )
                        })}
                        {DIGITALTRANSFERFORBUSINESS.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServicePage grid1400'>
                                        <img src={item.img} alt=''/>
                                        <div className='grid1200 ServicePage-body'>
                                            <ul className='ServicePage-body-home' data-aos="fade-right">
                                                <li><NavLink to="/"><i className="fa-solid fa-house"></i> Trang chủ</NavLink></li>
                                                <li><i className="fa-solid fa-angle-right"></i></li>
                                                <li>Giải pháp chuyên nghành</li>
                                                <li><i className="fa-solid fa-angle-right"></i></li>
                                                <li>{item.label}</li>
                                            </ul>
                                            <div className='ServicePage-body-box'>
                                                <h3 data-aos="fade-right">{item.label}</h3>
                                                <p data-aos="fade-left">{item.p1}</p>
                                            </div>
                                            <p data-aos="fade-up">{item.p2}</p>
                                            <button data-aos="fade-right" onClick={() => this.nextContact()}>Liên hệ để biết thêm thông tin chi tiết >></button>
                                            <ServiceDetail/>
                                        </div>
                                    </div>
                                </Route>
                            )
                        })}
                        {INFORMATIONTECHNOLOGY.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServicePage grid1400'>
                                        <img src={item.img} alt=''/>
                                        <div className='grid1200 ServicePage-body'>
                                            <ul className='ServicePage-body-home' data-aos="fade-right">
                                                <li><NavLink to="/"><i className="fa-solid fa-house"></i> Trang chủ</NavLink></li>
                                                <li><i className="fa-solid fa-angle-right"></i></li>
                                                <li>Giải pháp chuyên nghành</li>
                                                <li><i className="fa-solid fa-angle-right"></i></li>
                                                <li>{item.label}</li>
                                            </ul>
                                            <div className='ServicePage-body-box'>
                                                <h3 data-aos="fade-right">{item.label}</h3>
                                                <p data-aos="fade-left">{item.p1}</p>
                                            </div>
                                            <p data-aos="fade-up">{item.p2}</p>
                                            <button data-aos="fade-right" onClick={() => this.nextContact()}>Liên hệ để biết thêm thông tin chi tiết >></button>
                                            <ServiceDetail/>
                                        </div>
                                    </div>
                                </Route>
                            )
                        })}
                        {PROFESSIONALSCIENTIFICEQUIPMENT.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServicePage grid1400'>
                                        <img src={item.img} alt=''/>
                                        <div className='grid1200 ServicePage-body'>
                                            <ul className='ServicePage-body-home' data-aos="fade-right">
                                                <li><NavLink to="/"><i className="fa-solid fa-house"></i> Trang chủ</NavLink></li>
                                                <li><i className="fa-solid fa-angle-right"></i></li>
                                                <li>Giải pháp chuyên nghành</li>
                                                <li><i className="fa-solid fa-angle-right"></i></li>
                                                <li>{item.label}</li>
                                            </ul>
                                            <div className='ServicePage-body-box'>
                                                <h3 data-aos="fade-right">{item.label}</h3>
                                                <p data-aos="fade-left">{item.p1}</p>
                                            </div>
                                            <p>{item.p2}</p>
                                            {item.id === 3 && 
                                                <div className='ServicePage-body_p'>
                                                    <p data-aos="fade-right">Với khả năng vận chuyển nâng cao, cấu trúc mở, tính năng tự động và trí tuệ nhân tạo tiên tiến, R70 đang định nghĩa lại những gì mà một UAS lên/xuống thẳng (VTOL) kích thước nhỏ có thể làm được. Các tải trọng đa nhiệm của R70 cung cấp khả năng tình báo - trinh sát - giám sát và khả năng chuyên chở mà trước đây còn bị giới hạn thậm chí ở những UAS có kích thước lớn hơn.</p>
                                                    <p data-aos="fade-left">Bộ cảm biến quang học bao gồm camera hồng ngoại bước sóng dài StormCaster-T thu phóng liên tục với khả năng ổn định đường ngắm đặc biệt, phạm vi chuyển động và định vị chính xác, camera HDZoom 30 cung cấp khả năng quan sát mục tiêu ở khoảng cách xa và camera trước EO/IR Frontcam cho kênh ảnh ngày và ảnh nhiệt có độ nét cao - được truyền trực tuyến & bảo mật đến mọi nơi trên thế giới. Với Osprey, người vận hành R70 có thể gắn nhanh và mang theo các vật thể phục vụ cho mục đích tiếp tế, tìm kiếm tài sản hoặc các nhiệm vụ chuyên biệt khác.</p>
                                                </div>
                                            }
                                            {item.id === 4 && 
                                                <div className='ServicePage-body_p'>
                                                    <div className='ServicePage-body_p_item'>
                                                        <p data-aos="fade-up">Máy có khả năng phát hiện một lượng lớn chất ma túy. Thiết kế máy nhỏ gọn, cho kết quả nhanh sau 53s rất phù hợp để lưu động trong quá trình tuần tra kiểm soát cũng như bắt giữ đối tượng. Các chất cấm có thể nhận diện được chia vào đa dạng các nhóm sau và liên tục được cập nhật, bổ sung để nhận diện đa dạng các hoạt chất mới.</p>
                                                        <p data-aos="fade-up">+ Nhóm M: Methamphetamine, MDMA, MDA, Ketamin </p>
                                                        <p data-aos="fade-up">+ Nhóm C: Cocaine </p>
                                                        <p data-aos="fade-up">+ Nhóm T: Canabiol (CBD), THC, Codein, Hydrocodone, Morphine, THC</p>
                                                        <p data-aos="fade-up">+ Nhóm H: Heroin </p>
                                                        <p data-aos="fade-up">+ Nhóm F: Fentanyl</p>
                                                    </div>
                                                    <div className='ServicePage-body_p_item'>
                                                        <p data-aos="fade-up">Với giải pháp trên, ETC tự hào rằng sản phẩm mình đưa đến khách hàng hoạt động nhanh chóng, nhỏ gọn và chính xác, mang lại hiệu quả cao trong công tác đấu tranh phòng chống tội phạm ma tuý của khách hàng.</p>
                                                    </div>
                                                </div>
                                            }
                                            <button data-aos="fade-right" onClick={() => this.nextContact()}>Liên hệ để biết thêm thông tin chi tiết >></button>
                                            <ServiceDetail/>
                                        </div>
                                    </div>
                                </Route>
                            )
                        })}
                        {SYSTEMINTEGRATION.map((item) => {
                            return(
                                <Route path={`/${item.link}`} key={item.id}>
                                    <div className='ServicePage grid1400'>
                                        <img src={item.img} alt=''/>
                                        <div className='grid1200 ServicePage-body'>
                                            <ul className='ServicePage-body-home' data-aos="fade-right">
                                                <li><NavLink to="/"><i className="fa-solid fa-house"></i> Trang chủ</NavLink></li>
                                                <li><i className="fa-solid fa-angle-right"></i></li>
                                                <li>Giải pháp chuyên nghành</li>
                                                <li><i className="fa-solid fa-angle-right"></i></li>
                                                <li>{item.label}</li>
                                            </ul>
                                            <div className='ServicePage-body-box'>
                                                <h3 data-aos="fade-right">{item.label}</h3>
                                                <p data-aos="fade-left">{item.p1}</p>
                                            </div>
                                            <p data-aos="fade-up">{item.p2}</p>
                                            <p data-aos="fade-up">{item.p3}</p>
                                            <p data-aos="fade-up">{item.p4}</p>
                                            <p data-aos="fade-up">{item.p5}</p>
                                            <p data-aos="fade-up">{item.p6}</p>
                                            <p data-aos="fade-up">{item.p7}</p>
                                            {item.id === 1 && 
                                                <div className='ServicePage-body_p'>
                                                    <div className='ServicePage-body_p_item'>
                                                        <p data-aos="fade-up">Mỗi doanh nghiệp có mô hình hoạt động, cách ra quyết định và có những đặc thù riêng theo ngành. ETC cung cấp những nhóm giải pháp theo ngành để phát huy hiệu quả các khoản đầu tư, phục vụ cho mục tiêu kinh doanh và phù hợp với năng lực khai thác công nghệ của doanh nghiệp</p>
                                                    </div>
                                                    <div className='ServicePage-body_p_item'>
                                                        <p data-aos="fade-up">Xây dựng kết nối đa dạng (mô hình mạng phân cấp, cấu trúc mạng dự phòng)</p>
                                                        <p data-aos="fade-up">Tư vấn, thiết kế và triển khai hệ thống mạng LAN, WAN, INTERNET,…</p>
                                                        <p data-aos="fade-up">Cài đặt và cấu hình thiết bị mạng, kết nối mạng cho hệ thống máy chủ</p>
                                                        <p data-aos="fade-up">Khảo sát, phân tích, đánh giá năng lực, mức độ bảo mật của hệ thống hiện tại và đưa ra các giải pháp tối ưu</p>
                                                        <p data-aos="fade-up">Nâng cấp hệ thống mạng</p>
                                                    </div>
                                                </div>
                                            }
                                            {item.id === 3 && 
                                                <div className='ServicePage-body_pone'>
                                                    <p data-aos="fade-up">Với kinh nghiệm trong việc tư vấn, triển khai và hỗ trợ các dịch vụ điện toán đám mây, cùng đội ngũ kỹ sư nhiều kinh nghiệm và am hiểu các nền tảng đám mây: VMware, Amazon Web Services, Microsoft, IBM, Oracle,… ETC mang đến cho khách hàng giải pháp đám mây với khả năng quản lý tài nguyên và ứng dụng một cách linh hoạt và hiệu quả.</p>
                                                    <p data-aos="fade-up">Khách hàng có thể lựa chọn chức năng tự quản trị, đảm bảo hiệu quả cao trong quản lý tài nguyên. Các dịch vụ quản trị đám mây ETC cung cấp bao gồm:</p>
                                                    <p data-aos="fade-up">- Tư vấn kiến trúc</p>
                                                    <p data-aos="fade-up">- Triển khai, tích hợp</p>
                                                    <p data-aos="fade-up">- Đào tạo, chuyển giao công nghệ</p>
                                                    <p data-aos="fade-up">- Hỗ trợ vận hành.</p>
                                                    <p data-aos="fade-up">Các giải pháp nổi bật mà ETC đã triển khai gồm có: Ảo hóa máy trạm, ảo hóa mạng, điện toán đám mây với các tính năng cấp phát tài nguyên theo nhu cầu, người dùng tự tạo và tùy biến tài nguyên, tính cước…</p>
                                                    <p data-aos="fade-up">Chúng tôi tự hào là đơn vị đã tư vấn, triển khai cho các khách hàng có hệ thống CNTT lớn như: EVN, Vietinbank, Hải quan,…</p>
                                                </div>
                                            }
                                            {item.id === 4 && 
                                                <div className='ServicePage-body_p'>
                                                    <div className='ServicePage-body_p_item'>
                                                        <p data-aos="fade-up">ETC triển khai, cung cấp các giải pháp tường lửa ứng dụng web (WAFWeb Application Firewall), tường lửa cho hệ thống cơ sở dữ liệu (DBF - Database Firewall) hàng đầu trên thế giới như Imperva, F5.</p>
                                                        <p data-aos="fade-up">Tường lửa bảo vệ ứng dụng Web (WAF) cho phép ngăn chặn và giảm thiểu các cuộc tấn công lỗ hổng ở lớp ứng dụng như: SQL injection, cross-site scripting, botnet, DDoS attacks... Tường lửa bảo vệ cơ sở dữ liệu (DBF) cho phép đánh giá, phân tích điểm yếu, các cấu hình chưa tốt trên cơ sở dữ liệu (CSDL)… bảo vệ và giảm thiểu các rủi ro về an toàn thông tin cho cơ sở dữ liệu (CSDL).</p>
                                                    </div>
                                                    <div className='ServicePage-body_p_item'>
                                                        <p data-aos="fade-up">Triển khai, cung cấp, thiết kế và tích hợp các giải pháp bảo mật phòng chống tấn công mạng khác như:</p>
                                                        <p data-aos="fade-up">Giải pháp bảo mật phòng chống tấn công kiên trì có chủ đích – APT (Advanced persistent threat) cho hệ thống mạng, hệ thống email đến từ các hãng cung cấp hàng đầu hiện nay: Palo Alto Networks, Checkpoint, Fortinet…</p>
                                                        <p data-aos="fade-up">Giải pháp nhận dạng và quản lý truy cập mạng (NAC - Network Access Control) từ hãng cung cấp Forescout.</p>
                                                        <p data-aos="fade-up">Hệ thống phòng chống xâm nhập (Intrusion prevention system, viết tắt là IPS), Hệ thống bảo mật web (Mcafee Web Gateway) từ hãng McAfee. • Hệ thống bảo mật email (Email sercurity) từ các hãng SonicWall, Cisco… Giải pháp ảo hóa và điện toán đám mây 42</p>
                                                    </div>
                                                </div>
                                            }
                                            {item.id === 7 && 
                                                <div className='ServicePage-body_p'>
                                                    <div className='ServicePage-body_p_item'>
                                                        <p data-aos="fade-up">Đảm bảo tính tổng thể và đồng bộ trong quá trình xây dựng trung tâm dữ liệu hiện tại và mở rộng trong tương lai.</p>
                                                        <p data-aos="fade-up">Giải pháp có kiến trúc mở, dễ tích hợp, dễ thích ứng cho hạ tầng vật lý của trung tâm dữ liệu.</p>
                                                        <p data-aos="fade-up">Giải pháp sử dụng các thiết bị từ một nhà cung cấp phần cứng đồng bộ từ hệ thống tủ rack, thiết bị nguồn, thiết bị làm mát cho đến các giải pháp an ninh</p>
                                                        <p data-aos="fade-up">Giải pháp đáp ứng nhu cầu về công suất nguồn tăng cao và mật độ thiết bị lớn</p>
                                                    </div>
                                                    <div className='ServicePage-body_p_item'>
                                                        <p data-aos="fade-up">Chúng tôi sử dụng các giải pháp làm mát hoạt động theo nguyên lý đẩy - kéo, cách ly các khu vực không khí nóng và lạnh, đảm bảo tính đối lưu trong trung tâm dữ liệu và tạo ra hiệu quả cao trong việc làm mát, tiết kiệm năng lượng điện.</p>
                                                        <p data-aos="fade-up">Đảm bảo trung tâm dữ liệu có tính sẵn sàng cao, khả năng mở rộng linh hoạt, khả năng quản trị cao, mức độ an ninh cao đồng thời đảm bảo tính kinh tế trong đầu tư cũng như trong vận hành.</p>
                                                        <p data-aos="fade-up">Giải pháp của chúng tôi cho phép việc đầu tư theo hướng nhu cầu đến đâu đầu tư tới đó, tối ưu hoá đầu tư ban đầu cũng như chi phí tiêu hao trong vận hành.</p>
                                                        <p data-aos="fade-up">Việc thiết kế dựa trên nguyên tắc đảm bảo độ linh hoạt, mở rộng tối đa gắn chặt nhu cầu về nguồn điện với nhu cầu về làm mát của trung tâm dữ liệu.</p>
                                                    </div>
                                                </div>
                                            }
                                            <button data-aos="fade-right" onClick={() => this.nextContact()}>Liên hệ để biết thêm thông tin chi tiết >></button>
                                            <ServiceDetail/>
                                        </div>
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