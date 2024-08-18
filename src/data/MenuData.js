import { FaHome,FaUser,FaShoppingCart   } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const MenuData = [
    {
        title:"หน้าแรก",
        path:"/",
        icon:<FaHome/>
    },
    {
        title:"สมาชิก",
        path:"/member",
        icon:<FaUser/>
    },
    {
        title:"สินค้า",
        path:"/product",
        icon:<FaShoppingCart/>
    },
    {
        title:"ติดต่อ",
        path:"/contect",
        icon:<IoCall/>
    }
]

export default MenuData