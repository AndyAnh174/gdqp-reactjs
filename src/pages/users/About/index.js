import { memo, React } from "react";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import BacHo from "assets/users/images/categories/BacHo.jpg";
import Phuong from "pages/users/About/img/Phuong.png";
import Loc from "pages/users/About/img/Loc.png";
import VA from "pages/users/About/img/VA.png";
import TA from "pages/users/About/img/TA.png";
import VuMinh from "pages/users/About/img/VuMinh.png";
import DoanThai from "pages/users/About/img/DoanThai.png";
import Khoa from "pages/users/About/img/Khoa.png";
const Learn = () => {
    let message =``;
    return (
    <>
    <section className="section-white">
        <div className="container">
            <div className="row">

                <div className="col-md-12 text-center">
                    <h2 className="section-title">
                        
                    </h2>
                    <p className="section-subtile">{message}</p>
                </div>
            <div className=" team-container">
                <div className="">
                    <div className=" team-item phuong">
                        <img src={ Phuong } className="team-img" alt="pic" />
                        <h3>Phương</h3>
                        <div className="team-info">
                            <p>Đinh Hoàng Phương</p>
                            <p>Anh Lớn Tiểu Đội 9</p>

                            <ul className="team-icon">
                                <li><a href="#" className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a></li>
                                <li><a href="#" className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </a></li>
                                <li><a href="#" className="github">
                                    <i className="fa fa-github"></i>
                                </a></li>
                                <li><a href="#" className="instagram">
                                    <i className="fa fa-instagram"></i>
                                </a></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className=" team-item loc">
                        <img src={ Loc } className="team-img" alt="pic" />
                        <h3>Lộc (Lộc Shadow)</h3>
                        <div className="team-info">
                            <p>Nguyễn Đình Tấn Lộc</p>
                            <p>Nhị ca Tiểu Đội 9</p>

                            <ul className="team-icon">
                                <li><a href="#" className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a></li>
                                <li><a href="#" className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </a></li>
                                <li><a href="#" className="github">
                                    <i className="fa fa-github"></i>
                                </a></li>
                                <li><a href="#" className="instagram">
                                    <i className="fa fa-instagram"></i>
                                </a></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className=" team-item VA">
                        <img src={ VA } className="team-img" alt="pic" />
                        <h3>Việt Anh (Linux)</h3>
                        <div className="team-info">
                            <p>Hồ Việt Anh</p>
                            <p>mai thêm nội dung sau</p>

                            <ul className="team-icon">
                                <li><a href="https://twitter.com/VietHo41299" className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a></li>
                                <li><a href="https://www.facebook.com/andy.anh174/" className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </a></li>
                                <li><a href="https://github.com/AndyAnh174/" className="github">
                                    <i className="fa fa-github"></i>
                                </a></li>
                                <li><a href="https://www.instagram.com/mortal.aa174/" className="instagram">
                                    <i className="fa fa-instagram"></i>
                                </a></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className=" team-item TA">
                        <img src={ TA } className="team-img" alt="pic" />
                        <h3>Tuan Anh (Cuộc sống này thật Nhàn)</h3>
                        <div className="team-info">
                            <p>Lê Trần Tuấn Anh</p>
                            <p>mai thêm nội dung sau</p>

                            <ul className="team-icon">
                                <li><a href="https://twitter.com/VietHo41299" className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a></li>
                                <li><a href="https://www.facebook.com/andy.anh174/" className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </a></li>
                                <li><a href="https://github.com/AndyAnh174/" className="github">
                                    <i className="fa fa-github"></i>
                                </a></li>
                                <li><a href="https://www.instagram.com/mortal.aa174/" className="instagram">
                                    <i className="fa fa-instagram"></i>
                                </a></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className=" team-item Minh">
                        <img src={ VuMinh } className="team-img" alt="pic" />
                        <h3>Minh (Vua phá lưới)</h3>
                        <div className="team-info">
                            <p>Nguyễn Vũ Minh</p>
                            <p>mai thêm nội dung sau</p>

                            <ul className="team-icon">
                                <li><a href="https://twitter.com/VietHo41299" className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a></li>
                                <li><a href="https://www.facebook.com/andy.anh174/" className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </a></li>
                                <li><a href="https://github.com/AndyAnh174/" className="github">
                                    <i className="fa fa-github"></i>
                                </a></li>
                                <li><a href="https://www.instagram.com/mortal.aa174/" className="instagram">
                                    <i className="fa fa-instagram"></i>
                                </a></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className=" team-item Khoa">
                        <img src={ Khoa } className="team-img" alt="pic" />
                        <h3>Khoa (Linux)</h3>
                        <div className="team-info">
                            <p>Nguyễn Anh Khoa</p>
                            <p>mai thêm nội dung sau</p>

                            <ul className="team-icon">
                                <li><a href="https://twitter.com/VietHo41299" className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a></li>
                                <li><a href="https://www.facebook.com/andy.anh174/" className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </a></li>
                                <li><a href="https://github.com/AndyAnh174/" className="github">
                                    <i className="fa fa-github"></i>
                                </a></li>
                                <li><a href="https://www.instagram.com/mortal.aa174/" className="instagram">
                                    <i className="fa fa-instagram"></i>
                                </a></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className=" team-item DoanThai">
                        <img src={ DoanThai } className="team-img" alt="pic" />
                        <h3>Thái (Linux)</h3>
                        <div className="team-info">
                            <p></p>
                            <p>mai thêm nội dung sau</p>

                            <ul className="team-icon">
                                <li><a href="https://twitter.com/VietHo41299" className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </a></li>
                                <li><a href="https://www.facebook.com/andy.anh174/" className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </a></li>
                                <li><a href="https://github.com/AndyAnh174/" className="github">
                                    <i className="fa fa-github"></i>
                                </a></li>
                                <li><a href="https://www.instagram.com/mortal.aa174/" className="instagram">
                                    <i className="fa fa-instagram"></i>
                                </a></li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
    
    );
};

export default memo(Learn);