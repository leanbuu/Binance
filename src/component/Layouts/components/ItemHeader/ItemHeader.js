import classNames from "classnames/bind";
import styles from '../ItemHeader/ItemHeader.module.scss';
import {IoMdArrowDropdown} from 'react-icons/io'
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function ItemHeader({data, bien}) {
    const [hien, setHien] = useState('block') 
    useEffect(() => {
        if(bien === 2 || bien === 7 || bien === 9){
           setHien('none')
        }else{
           setHien('block')
        }
    },[bien])
    let active = bien;
    return ( 
        <div className={`${styles.select} ${data?.id === active ?styles.active:""}`}>
            <div className={cx('title')}>{data.name}</div>
            <IoMdArrowDropdown style={{display : `${hien}`}} className={cx("icon")}/>
        </div>
     );
}

export default ItemHeader;