import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (<>
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer-about">
                        <h1 className="footer-about-logo">
                            Tiểu Đội 9
                        </h1>
                        <ul>
                            <li>Phạm Xuân Phát</li>
                            <li>Quốc Phòng An Ninh Nhóm 28</li>
                            <li>by: Tiểu Đội 9</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer-widget">
                        <h6>Nguồn</h6>
                        <ul>
                            <li>
                                <Link to="">
                                    Các nguồn tài liệu khác
                                </Link>
                            </li>
                            <li>
                                <Link to="https://dangcongsan.vn/">
                                dangcongsan.vn
                                </Link>
                            </li>
                            <li>
                                <Link to="https://docs.google.com/document/d/16qWhPqN9WXK1ChdJxOlbZ9D6irPyl9iqNaq1Gugw9DE/edit?usp=sharing">
                                Phạm Xuân Phát
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="col-lg-3">3</div> */}
            </div>
        </div>

    </footer>
</>
    );
};

export default memo(Footer);