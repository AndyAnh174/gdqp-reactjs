import { memo } from "react";
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

const Header = () => {

    const handleCopyEmail = () => {
        const email = 'hovietanh147@gmail.com';
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert(`Đã sao chép: ${email}`);
    };

    return ( 
    <>
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header-top-left">
                        <ul>
                            <li onClick={handleCopyEmail}>
                                <AiOutlineMail />
                                hovietanhh147@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header-top-right">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/andy.anh174" target="_blank">
                                    <AiOutlineFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mortal.aa174/?fbclid=IwAR2BrZ_Nf-1O8UMy3B3uoNuf-ZeqRHCzoeH6o7a7-NKGRwwZ8b4TVrNFkdY" target="_blank">
                                    <AiOutlineInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/AndyAnh174/" target="_blank">
                                    <AiOutlineGithub />
                                </a>
                            </li>
                            <span>Support</span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
            LOGO
            </div>
        </div>

    </>
    );
};

export default memo(Header);
