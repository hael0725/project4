import logo from './logo.svg';
import './App.scss';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Grid, Pagination } from 'swiper/modules';

function App() {
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
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
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
          <SwiperSlide>
            <img src="./img/pr1.jpg" alt="" />
            <div className="txt">
              <h3>키르시 X 썬원버드 그래픽 루즈핏 티셔츠</h3>
              <span>44,100원</span>
              <i className="fa-solid fa-heart"></i>
            </div>
          </SwiperSlide>

          <SwiperSlide><img src="./img/pr2.jpg" alt="" />
            <div className="txt">
              <h3>키르시 X 썬원버드 그래픽 래글런 롱 슬리브</h3>
              <span>53,100원</span>
              <i className="fa-solid fa-heart"></i>
            </div>
          </SwiperSlide>

          <SwiperSlide><img src="./img/pr3.jpg" alt="" />
            <div className="txt">
              <h3>키르시 X 썬원버드 빅 오버 사이즈 아이 티셔츠</h3>
              <span>44,100원</span>
              <i className="fa-solid fa-heart"></i>
            </div>
          </SwiperSlide>

          <SwiperSlide><img src="./img/pr4.jpg" alt="" />
            <div className="txt">
              <h3>키르시 X 썬원버드 빅 오버 사이즈 그래픽 티셔츠</h3>
              <span>44,100원</span>
              <i className="fa-solid fa-heart"></i>
            </div>
          </SwiperSlide>

          <SwiperSlide><img src="./img/pr5.jpg" alt="" />
            <div className="txt">
              <h3>키르시 X 썬원버드 그래픽 스탠다드핏 티셔츠</h3>
              <span>37,800원</span>
              <i className="fa-solid fa-heart"></i>
            </div>
          </SwiperSlide>

          <SwiperSlide><img src="./img/pr6.jpg" alt="" />
            <div className="txt">
              <h3>키르시 X 썬원버드 그래픽 루즈핏 후드</h3>
              <span>80,100원</span>
              <i className="fa-solid fa-heart"></i>
            </div>
          </SwiperSlide>

          <SwiperSlide><img src="./img/pr7.jpg" alt="" />
            <div className="txt">
              <h3>
                키르시 X 썬원버드 그래픽 루즈핏 티셔츠</h3>
              <span>44,100원</span>
              <i className="fa-solid fa-heart"></i>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* MD 픽 */}
      <div className="md_pick">
        <h2>MD's PICK</h2>
        <div className="img_wrap">
          <img src="./img/md_title.jpg" alt="" className='title_img' />
          <div className="wrap">
            {/* 1 열  */}
            <div className="side_img">
              <img src="./img/md1.jpg" alt="" />
              <div className="txt">
                <h3>키르시 X 썬원버드 메인 그래픽 빅 …</h3>
              </div>
            </div>
            <div className="side_img">
              <img src="./img/md2.jpg" alt="" />
              <div className="txt">
                <h3>키르시 X 썬원버드 레빗 체리 루즈 …</h3>
              </div>
            </div>
            <div className="side_img">
              <img src="./img/md3.jpg" alt="" />
              <div className="txt">
                <h3>키르시 X 썬원버드 풀 프린트 스탠…</h3>
              </div>
            </div>
            <div className="side_img">
              <img src="./img/md4.jpg" alt="" />
              <div className="txt">
                <h3>키르시 X 썬원버드 세미 크롭 래글…</h3>
              </div>
            </div>
          </div>
          {/* 2 열  */}
          <div className="wrap2">
            <div className="side_img">
              <img src="./img/md5.jpg" alt="" />
              <div className="txt">
                <h3>키르시 X 썬원버드 레빗 체리 루즈…</h3>
              </div>
            </div>
            <div className="side_img">
              <img src="./img/md6.jpg" alt="" />
              <div className="txt">
                <h3>키르시 X 썬원버드 링거 티셔츠 라…</h3>
              </div>
            </div>
            <div className="side_img">
              <img src="./img/md7.jpg" alt="" />
              <div className="txt">
                <h3>키르시 X 썬원버드 풀 프린트 빅 오…</h3>
              </div>
            </div>
            <div className="side_img">
              <img src="./img/md8.jpg" alt="" />
              <div className="txt">
                <h3>키르시 X 썬원버드 스트라이프 루즈…
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
