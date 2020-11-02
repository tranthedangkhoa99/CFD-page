import React from 'react'

function Header() {
    return (
        <div className="footer-wrapper">
            <footer>
            <div className="footer-content">
                <div className="footer-content__left">
                <h4>
                    Sáng tạo, tinh tế và phù hợp sẽ khiến <br />
                    sản phẩm của bạn trở nên khác biệt.
                </h4>
                <p className="address">
                    Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh
                </p>
                <p className="phone-number">024158456</p>
                <div className="social">
                    <img src="../img/facebook.png" alt="" />
                    <img src="../img/email 1.png" alt="" />
                    <img src="../img/skype 1.png" alt="" />
                </div>
                </div>
                <div className="footer-content__right">
                <ul className="footer__nav">
                    <li>
                    <a href="#"> trang chu</a>
                    </li>
                    <li>
                    <a href="#"> trang chu</a>
                    </li>
                    <li>
                    <a href="#"> trang chu</a>
                    </li>
                    <li>
                    <a href="#"> trang chu</a>
                    </li>
                </ul>
                <div className="footer__scroll-top">
                    <p>cuộn lên</p>
                </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__content">
                <p>2020 Creative Front-End Dev</p>
                <p>Được thiết kế và lập trình bởi CFD Team</p>
                </div>
            </div>
            </footer>
        </div>
    );
}

export default Header
