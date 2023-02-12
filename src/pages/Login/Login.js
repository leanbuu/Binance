
import classNames from "classnames/bind";
import styles from "./Login.module.scss";




const cx = classNames.bind(styles);


function Login() {
     
    return ( 
       <div className={cx('login')}>
            Loginnnn
       </div>
     );
 }
 
 export default Login;