import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (<>
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer-about">
                        <h1 className="footer-about-logo">
                            Tên Nhóm
                        </h1>
                        <ul>
                            <li>tên giáo viên</li>
                            <li>tên giáo viên</li>
                            <li>by: Ho Viet Anh</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer-widget">
                        <h6>Nguồn</h6>
                        <ul>
                            <li>
                                <Link to="">
                                    nguồn 1
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                nguồn 2
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                nguồn 3
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">3</div>
            </div>
        </div>

    </footer>
</>
    );
};

export default memo(Footer);