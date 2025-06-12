function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-left">
        <div className="footer-column">
          <h4>INFORMATION</h4>
          <ul>
            <li><a href="#">Notice</a></li>
            <li><a href="#">Review</a></li>
            <li><a href="#">Activation</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">1:1 Q&A</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>TERMS & CONDITIONS</h4>
          <ul>
            <li><a href="#">Term of use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>FOLLOW US</h4>
          <div className="sns-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <p>8F, 242, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do</p>
        <p>Business License. 284-81-00849 Online Business License. 제2023-성남분당A-0337호</p>
        <p>kirsh.official@gmail.com</p>
        <p>주식회사 비바스튜디오 CEO 이준권</p>
      </div>
    </footer>
  );
}

export default Footer;
