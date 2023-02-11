import classNames from "classnames/bind";
// import { useState } from "react";
import ItemHeader from "../ItemHeader/ItemHeader";
import styles from '../MenuItem/MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({items = []}) {
//     const [active, setActive] = useState(1);
    const renderItems = () =>{
       return items.map((item, index) => ( 
            <ItemHeader key={item.id} data={item} bien={item.id} />
       ))
    }
    return ( 
        <div className={cx("menuitem")}>
             {renderItems()} 
        </div>
     );
}

export default MenuItem;