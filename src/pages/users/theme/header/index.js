import { memo, useState } from "react";
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlinePhone, AiOutlineGithub, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { ROUTERS } from "utils/router";
import { Link } from "react-router-dom";
const Header = () => {
    const [isShowCategories, setShowCategories] = useState(true);
    const [menus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Bài Học",
            path: ROUTERS.USER.LEARN,
        },
        {
            name: "Mục Lục",
            path: ROUTERS.USER.TABLE,
            isShowSubmenu: false,
            child: [
                {
                
                        name: "I.",
                        path: "",
                    
                },
                {
                    
                        name: "II.",
                        path: "",
                    
                },
            ],
            
        },
        {
            name: "About",
            path: ROUTERS.USER.ABOUT,
        },
    ]);

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
                            <span>Hỗ Trợ</span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="header-logo">
                    <h1>tên nhóm</h1>
                </div>
            </div>
            <div className="col-xl-6">
                <nav className="header-menu">
                    <ul>  
                        {
                            menus?.map((menu, menuKey) => (
                            <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                
                                <Link to={menu?.path}>{menu?.name}</Link>
                                {
                                    menu.child && ( 
                                    <ul>
                                        <li className="header-menu-drogdown">
                                            {
                                                menu.child.map((childItem, childKey) =>(
                                                    <li key={`${menuKey}-${childKey}`}>
                                                        <Link to={childItem.path}>{childItem.name}</Link>
                                                    </li>
                                                ))
                                            }
                                            <Link>
                                            </Link>
                                        </li>
                                    </ul>
                                        
                                    )
                                }
                            </li>
                            ))}
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row hero-categories-container">
            <div className="col-lg-3 hero-categories">
                <div className="hero-categories-all" onClick={() => setShowCategories(!isShowCategories)}>
                     <AiOutlineMenu />
                     Danh sách sản phẩm
                     </div>
                     {
                        isShowCategories  && (  
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to="#">phần 1</Link>
                            </li>
                            <li>
                                <Link to="#">phần 2</Link>
                            </li>
                            <li>
                                <Link to="#">phần 3</Link>
                            </li>
                        </ul>
                        )
                     }
              
                    
            </div>
            <div className="col-lg-9 hero-search-container">
                     <div className="herro_search">
                        <div className="hero-search-form">
                            <form>
                                <input type="text" name="" value="" placeholder="bạn muốn tìm ?"/>
                                <button type="submit"> tìm kiếm</button>
                            </form>
                        </div>
                        <div className="hero-search-phone">
                            <div className="hero-search-phone-icon">
                                <AiOutlinePhone/>
                            </div>
                            <div className="hero-search-phone-text">
                                <p>15618919119</p>
                            </div>
                        </div>
                     </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default memo(Header);
