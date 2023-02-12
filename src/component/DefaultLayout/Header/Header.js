import classNames from "classnames/bind";
import styles from '../Header/Header.module.scss';
import { LogoIcon } from "../../Layouts/components/Icons/Icons";
import { CgMenuGridR}  from "react-icons/cg";
import MenuItem from "../../Layouts/components/MenuItem/MenuItem";
import {AiFillGift} from 'react-icons/ai'
import {TbBookDownload} from 'react-icons/tb'
import {MdOutlineLanguage,MdOutlineLightMode} from 'react-icons/md'
import { Link } from "react-router-dom";
import Binance from "../../../BinanceContext/Binance";
import { useContext} from "react";


const cx = classNames.bind(styles);
const HEADER = [
    {
        id: 1,
        name: 'Mua Crypto'
    },
    {
        id: 2,
        name: 'Thị trường'
    },
    {
        id: 3,
        name: 'Giao dịch'
    },
    {
        id: 4,
        name: 'Phát sinh'
    },
    {
        id: 5,
        name: 'Earn'
    },
    {
        id: 6,
        name: 'Tài chính'
    },
    {
        id: 7,
        name: 'NFT'
    },
    {
        id: 8,
        name: 'Doanh nghiệp'
    },
    {
        id: 9,
        name: 'Bảng tin'
    },
    
 ]
function Header() {
    const {doi, handleDoi, handleHome} = useContext(Binance);
    return ( 
        <div className={cx('header')}>
           <Link onClick={handleHome}  to={'/'}> <div className={cx('logo')}>
                <LogoIcon />
            </div></Link>
            <div style={{display : `${doi}` }}>
            <div  className={cx("menuheader")}>
                <div className={cx('bocicon')}>
                  <CgMenuGridR className={cx("iconbar")} /> 
                </div>
                <MenuItem items={HEADER}/>
            </div>
            </div>
            <div className={cx('trang')}></div>
            <div style={{display : `${doi}` }}>
           <div className={cx("rheader")}>
            <Link onClick={handleDoi} to='/login'>
            <div className={cx("infoheader")}>
                    <div  className={cx('login')}>Đăng nhập</div>
            </div>
            </Link>
            <Link className={cx('link')} to={'/login'}>
           <div onClick={handleDoi} className={cx('dangky')}>
             <div className={cx('icondangky')}>
                <AiFillGift />
             </div> 
             <div className={cx("titledangky")}>
                Đăng ký
             </div>
           </div>
           </Link>
           <div className={cx("bociconqr")}>
                <TbBookDownload className={cx('iconqr')}/>
            </div>
           <div className={cx('tool')}>
             <div className={cx("language")}>
                <MdOutlineLanguage className={cx('iconlang')}/>
             </div>
             <div className={cx("cach")}></div>
             <div className={cx('coin')}>USD</div>
             <div className={cx("cach")}></div>
             <div className={cx("light")}>
                <MdOutlineLightMode className={cx('iconlang')}/>
             </div> 
           </div>
           </div>
           </div>
        </div>
        
     );
}

export default Header;