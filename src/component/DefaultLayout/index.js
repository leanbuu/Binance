import Header from "./Header/Header";
import classNames from "classnames/bind";
import styles from '../DefaultLayout/DefaultLayout.module.scss';
const cx = classNames.bind(styles);


function DefaultLayout( {children }) {
    return ( 
        <div className={cx('container')}>
            <Header />
            <div className="content">
               {children}
            </div>
        </div>

 );
}

export default DefaultLayout;