import React, { useState, Children } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "./History.css";
const VISIBILIDADE_MAXIMA = 3;
const CONTEUDO_CARTOES = [
  {
    img: "https://www.etc.vn/storage/setup/4lzkawu-frt2-jpg-500x500.jpg",
    titulo: "2023 - nay",
    conteudo: "Khai mở kỷ nguyên mới",
    imgone: "https://www.etc.vn/storage/setup/321445632-3369761549967921-7944918633294878926-n-500x500.jpg",
    pone: "Thay đổi nhận diện thương hiệu, khai phá kỷ nguyên mới trong hành trình chinh phục công nghệ.",
    imgtwo: "https://www.etc.vn/storage/setup/vneid-500x500.jpg",
    ptwo: "Kết nối với Hệ thống dữ liệu dân cư Quốc gia – C06, mở rộng cung cấp giải pháp xác thực định danh điện tử và thanh toán không tiền mặt trong nhiều lĩnh vực: Dịch vụ công, Y tế, Ngân hàng, Hàng không, Giao thông,...",
    imgthree: "https://www.etc.vn/storage/setup/djj-500x500.jpg",
    pthree: "ETC và EPAY nhận quyết định chấp thuận đầu tư dự án Trung tâm Công nghệ Giải pháp phần mềm ETC, diện tích 5,4ha với tổng mức đầu tư hơn 2.300 tỷ đồng.",
  },
  {
    img: 'https://www.etc.vn/storage/setup/blog-security-ops1-500x500.webp',
    titulo: "2019 - 2022",
    conteudo: "Mở rộng lĩnh vực kinh doanh, mang đến hệ sinh thái công nghệ toàn diện, với năng lực lõi khép kín",
    imgone: "https://www.etc.vn/storage/setup/digital-technologies-foe-870-489-500x500.png",
    pone: "Thành lập Trung tâm khoa học thiết bị nghiệp vụ: cung cấp các giải pháp thiết bị khoa học đặc chủng, cho các nhiệm vụ bảo vệ an ninh quốc gia, và các nhu cầu đặc thù khác.",
    imgtwo: "https://www.etc.vn/storage/setup/vneid-500x500.jpg",
    ptwo: "Trở thành đối tác chiến lược cung cấp, phát triển các dịch vụ CNTT và dịch vụ định danh điện tử cho Cục cảnh sát Quản lý Hành chính về Trật tự xã hội (C06)",
    imgthree: "https://www.etc.vn/storage/setup/ges369-exin-cloud-computing-act-replacement-935x572-500x500.jpg",
    pthree: "Nghiên cứu và triển khai thành công các hệ thống Bảo mật quan trọng: SIEM, SOC,… cho các khách hàng lớn.",
  },
  {
    img: "https://www.etc.vn/storage/setup/visuel-une-2-500x500.jpg",
    titulo: "2014 - 2018",
    conteudo: "Phát triển bứt phá với nhiều dấu mốc quan trọng",
    imgone: "https://www.etc.vn/storage/setup/photo-2022-09-06-09-57-25-500x500.jpg",
    pone: "Trở thành chủ đầu tư dự án Trung tâm phát triển phần mềm ITERA với tổng diện tích 3,86ha tại Khu CNC Hoà Lạc với tổng mức đầu tư gần 1.500 tỷ đồng.",
    imgtwo: "https://www.etc.vn/storage/setup/finance-2jpg-500x500.webp",
    ptwo: "Triển khai thành công trọn bộ giải pháp cho một tổ chức tài chính: phòng chống rửa tiền AML, trục thanh toán Payment Hub, trung tâm bảo mật SIEM, ITSM, CAM….",
    imgthree: "https://www.etc.vn/storage/setup/giai-phap-sap-b1-500x500.webp",
    pthree: "Là đại diện duy nhất của Việt Nam là thành viên của United VARs - Hiệp hội các nhà phân phối giải pháp SAP toàn cầu.",
  },
  {
    img: "https://www.etc.vn/storage/setup/review-european-economic-governance-framework-814x543-500x500.jpg",
    titulo: "2005 - 2013",
    conteudo: "Ghi dấu ấn công nghệ bằng các giải pháp về tài chính, ngân hàng số",
    imgone: "https://www.etc.vn/storage/setup/video-900-500x500.jpg",
    pone: "Mở rộng cung cấp giải pháp và trở thành đơn vị lớn nhất trong cung cấp các hệ thống giám sát hình ảnh tích hợp nhận diện, giải pháp thanh toán qua POS, thẻ phi tiếp xúc cho các Tổ chức tài chính, ngân hàng lớn tại Việt Nam.",
    imgtwo: "https://www.etc.vn/storage/setup/intro4-500x500.jpg",
    ptwo: "Khai trương 2 trung tâm bảo hành tại TP.Hồ Chí Minh và Đà Nẵng.",
    imgthree: "https://www.etc.vn/storage/setup/bank-500x500.jpg",
    pthree: "Bắt đầu cung cấp và triển khai thành công cho Ngân hàng hàng loạt các giải pháp lớn phức tạp: Core Banking, Core chứng khoán, hệ thống khởi tạo khoản vay LOS, kho dữ liệu EDW trên nền tảng SAP, Internet banking, hệ thống VDI với quy mô client sử dụng lớn.",
  },
  {
    img: "https://www.etc.vn/storage/setup/how-to-build-digital-capabilities-blue-1-500x500.png",
    titulo: "2004",
    conteudo: "Ngày 03/09/2004: Thành lập",
    imgone: "https://www.etc.vn/storage/setup/3cc4dd256337827798fab630072ab354-500x500.jpg",
    pone: "ETC được thành lập. Bắt đầu hành trình công nghệ bằng việc triển khai mạng cáp quang đầu tiên cho các ngân hàng TMCP lớn tại Việt Nam.",
  },
];

const Cartao = ({img, titulo, conteudo, imgone, pone, imgtwo, ptwo, imgthree, pthree}) => (
  <div className="cartao">
    <div className="cartao-history">
        <div className="cartao-item">
            <img src={img} alt=""/>
        </div>
        <div className="cartao-item">
            <h2>{titulo}</h2>
            <p>{conteudo}</p>
        </div>
    </div>
    <hr></hr>
    <div className="cartao-group">
        <div className="cartao-group_detail">
            <div>
                <img src={imgone} alt=""/>
            </div>
            <p>{pone}</p>
        </div>
        <div className="cartao-group_detail">
            <div>
                <img src={imgtwo} alt=""/>
            </div>
            <p>{ptwo}</p>
        </div>
        <div className="cartao-group_detail">
            <div>
                <img src={imgthree} alt=""/>
            </div>
            <p>{pthree}</p>
        </div>
    </div>
  </div>
);

const Carrosel = ({ children }) => {
  const [atualAtivo, setAtualAtivo] = useState(0);
  const TOTAL_DE_CARDS = CONTEUDO_CARTOES.length;
  return (
    <div className="carrosel-geral">
      {atualAtivo > 0 && (
        <button
          className="navegacao esquerda"
          onClick={() => setAtualAtivo((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {Children.map(children, (elementoFilho, i) => (
        <div
          className="conteudo-geral"
          key={i}
          style={{
            "--atualAtivo": i === atualAtivo ? 1 : 0,
            "--compensacao": (atualAtivo - i) / 3,
            "--direcao": Math.sign(atualAtivo - i),
            "--abs-compensacao": Math.abs(atualAtivo - i) / 3,
            pointerEvents: atualAtivo === i ? "auto" : "none",
            opacity:
              Math.abs(atualAtivo - i) >= VISIBILIDADE_MAXIMA ? "0" : "1",
            display:
              Math.abs(atualAtivo - i) > VISIBILIDADE_MAXIMA ? "none" : "block",
          }}
        >
          {elementoFilho}
        </div>
      ))}
      {atualAtivo < TOTAL_DE_CARDS - 1 && (
        <button
          className="navegacao direita"
          onClick={() => setAtualAtivo((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const History = () => (
  <div className="History">
    <Carrosel>
      {CONTEUDO_CARTOES.map((_, i) => (
        <Cartao
          key={i}
          img={CONTEUDO_CARTOES[i].img}
          titulo={CONTEUDO_CARTOES[i].titulo}
          conteudo={CONTEUDO_CARTOES[i].conteudo}
          imgone={CONTEUDO_CARTOES[i].imgone}
          pone={CONTEUDO_CARTOES[i].pone}
          imgtwo={CONTEUDO_CARTOES[i].imgtwo}
          ptwo={CONTEUDO_CARTOES[i].ptwo}
          imgthree={CONTEUDO_CARTOES[i].imgthree}
          pthree={CONTEUDO_CARTOES[i].pthree}
        />
      ))}
    </Carrosel>
  </div>
);

export default History;
