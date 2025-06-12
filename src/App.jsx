import './App.scss';
import { Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from './data.jsx';
import { useState } from 'react';
import Footer from './footer.jsx';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function App() {
  let [all] = useState(data)

  const best=all.filter(item=>item.category=='best')
  const mdPick=all.filter(item=>item.category=='md_pick')

  return (
    <div className="App">
      {/* 헤더 */}
      <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><img src="./img/로고.png" alt="" width="130px" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">SHOP</Nav.Link>

              <NavDropdown title="COLLECTION" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">kirsh cherry</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  25SS SPOT
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">25ss</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  collaboration
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">ARCHIVR</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><img src="./img/cart.png" alt="" /></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <img src="./img/search.png" alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 베너 슬라이더 */}
      <div className="slider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src="./img/main1-2.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./img/main1-3.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </div>

      {/* 베스트 제품 */}
      <div className="best_product">
        <h2>BEST</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
           {
            best.map((item, i)=>
            <SwiperSlide>
              <img src={process.env.PUBLIC_URL + item.imgUrl} alt="" />
              <div className="txt">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
                <i className="fa-solid fa-heart"></i>
              </div>
            </SwiperSlide>
            )
          }
        </Swiper>
      </div>

      {/* MD 픽 */}
      <div className="md_pick">
        <h2>MD's PICK !</h2>

        <div className="img_wrap">
          <div className="title_img">
            <img src="./img/md_title.jpg" alt="" />
          </div>

          <div className="side_block">
            {/* 1 열  */}
            <div className="wrap">
              <div className="side_img">
                <img src="./img/md1.jpg" alt="" />
                <div className="txt">
                  <h3>키르시 X 썬원버드 메인 그래픽 빅 …</h3>
                  <span>44,100원</span>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <div className="side_img">
                <img src="./img/md2.jpg" alt="" />
                <div className="txt">
                  <h3>키르시 X 썬원버드 레빗 체리 루즈 …</h3>
                  <span>44,100원</span>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <div className="side_img">
                <img src="./img/md3.jpg" alt="" />
                <div className="txt">
                  <h3>키르시 X 썬원버드 풀 프린트 스탠…</h3>
                  <span>44,100원</span>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <div className="side_img">
                <img src="./img/md4.jpg" alt="" />
                <div className="txt">
                  <h3>키르시 X 썬원버드 세미 크롭 래글…</h3>
                  <span>44,100원</span>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
            </div>
            {/* 2 열  */}
            <div className="wrap2">
              <div className="side_img">
                <img src="./img/md5.jpg" alt="" />
                <div className="txt">
                  <h3>키르시 X 썬원버드 레빗 체리 루즈…</h3>
                  <span>44,100원</span>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <div className="side_img">
                <img src="./img/md6.jpg" alt="" />
                <div className="txt">
                  <h3>키르시 X 썬원버드 링거 티셔츠 라…</h3>
                  <span>44,100원</span>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <div className="side_img">
                <img src="./img/md7.jpg" alt="" />
                <div className="txt">
                  <h3>키르시 X 썬원버드 풀 프린트 빅 오…</h3>
                  <span>44,100원</span>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <div className="side_img">
                <img src="./img/md8.jpg" alt="" />
                <div className="txt">
                  <h3>키르시 X 썬원버드 스트라이프 루즈…
                  </h3>
                  <span>44,100원</span>
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 뉴 상품 */}
      <div className="new_item">
        <h2>NEW</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            mdPick.map((item, i)=>
            <SwiperSlide>
              <img src={process.env.PUBLIC_URL + item.imgUrl} alt="" />
              <div className="txt">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
                <i className="fa-solid fa-heart"></i>
              </div>
            </SwiperSlide>
            )
          }
        </Swiper>
      </div>

      {/* 흐르는 텍스트 박스  */}
      <div className="text_box">

      </div>

      {/* 푸터 */}
      <div></div>
      <Footer />
    </div>


  );
}

export default App;
