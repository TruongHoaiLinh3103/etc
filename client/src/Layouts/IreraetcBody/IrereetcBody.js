import React, { Component } from 'react';
import "../../Style/grid.css";
import './IreraetcBody.css'
import Banner from '../../Components/Banner/Banner';
import {IrereetcBodyData} from './Data/IrereetcBodyData';
class IrereetcBody extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <div className='grid1200 IrereetcBody'>
                    <iframe width="1207" height="679" 
                    src="https://www.youtube.com/embed/1G1oYCNBOZ0" 
                    title="22.07.24 ITERA Kỷ nguyên công nghệ mới của ETC" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
                    <div className='IrereetcBody-item'>
                        <p>Trung tâm nghiên cứu phát triển phần mềm ITERA được đầu 
                        tư xây dựng bởi Công ty Cổ phần hệ thống công nghệ ETC bao 
                        gồm 5 khu:</p>
                        <div className='IrereetcBody-item_kv' >
                            {IrereetcBodyData.map((item) => {
                                return(
                                    <li key={item.id}>{item.name} <b>{item.nameB}</b></li>
                                )
                            })}   
                        </div>
                    </div>
                    <div className='IrereetcBody_p'>
                        <p>Ông Phạm Tiến Hưng – Chủ tịch HĐQT Công ty ETC cho biết: 
                        Dự án sẽ tập trung vào việc nghiên cứu đưa những công nghệ 
                        mới, hiện đại trong lĩnh vực phần mềm trên thế giới triển 
                        khai áp dụng cho các phần mềm quản lý điều hành, vận hành 
                        sản xuất, phát triển khách hàng, cung cấp dịch vụ và đáp 
                        ứng các yêu cầu ngày càng cao của các cơ quan quản lý và 
                        doanh nghiệp, đặc biệt trong lĩnh vực quản lý nhà nước, 
                        tài chính, ngân hàng, bảo hiểm, giao thông vận tải, dịch 
                        vụ công, với các công nghệ chủ yếu bao gồm: trí tuệ nhân 
                        tạo, dữ liệu lớn, phân tích dự báo, tính toán hiệu năng cao, 
                        điện toán đám mây, phần mềm nhúng, IoT và một số công nghệ 
                        nền tảng hỗ trợ. Dự án được triển khai thành 2 giai đoạn, 
                        trong đó giai đoạn một có tổng vốn đầu tư là gần 1.500 tỷ đồng, 
                        đang được xây dựng bao gồm Trung tâm giới thiệu và hỗ trợ sản 
                        phẩm, Trung tâm phát triển phần mềm công nghệ cao và Trung tâm 
                        dữ liệu. Giai đoạn 1 dự kiến hoàn thiện và đưa vào sử dụng trong 
                        quý 2 năm 2023. Sau khi hoàn thành, dự án sẽ thu hút gần 6.000 lao 
                        động trong lĩnh vực công nghệ thông tin nói chung và phần mềm nói 
                        riêng; doanh thu dự kiến mang lại khoảng 1.700 tỷ đồng mỗi năm.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default IrereetcBody;