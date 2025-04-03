import {BrowserRouter, Link} from 'react-router-dom'
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Contact from '../pages/Contact';
import Dessert from '../pages/Dessert';
import MainCourse from '../pages/MainCourse';
import Starter from '../pages/Starter';
import { My_Hook_Order } from '../store/My_Hook_Order';
export const menuList = [
    {name:"Trang chủ", link:'/home', tagName:Home}, 
    {name:"Thực đơn", link:'/menu', tagName:Menu,
        subMenu: [
            { name: "Món khai vị", link: "/menu/starter" , tagName:Starter},
            { name: "Món chính", link: "/menu/main", tagName: MainCourse},
            { name: "Tráng miệng", link: "/menu/dessert", tagName: Dessert}
        ]
    }, 
    {name:"Liên hệ", link:'/contact', tagName:Contact}
];
function Header(){
    const {listOrder,setListOrder} = My_Hook_Order();
    return(
        <>
           <div className='sticky top-0 left-0 flex w-full items-center bg-blue-400 h-20'>       
                <div className='w-20'></div>      
                <div className="flex-1">
                    <ul className='flex space-x-10'>
                        {menuList.map((item, index)=>(
                            <li key={index} 
                                className="relative group" 
                            >
                                <Link className='text-xl !text-white hover:!underline' to={item.link}>
                                    {item.name}
                                </Link>
                                
                                {/* Submenu */}
                                {item.subMenu && (
                                    <ul 
                                        className="absolute left-0 mt-2 w-40 bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <li key={subIndex} className="border-b hover:bg-gray-100">
                                                <Link className='block px-4 py-2 text-gray-700' to={subItem.link}>
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to={'/booktable'}><button className='ml-auto mr-5 !bg-red-500 !text-white'>Book Table</button></Link>
                <div className='absolute right-2 top-2 text-center font-bold rounded-3xl w-6 h-6 bg-yellow-400 text-white'>{listOrder.length}</div>
           </div>
            
        </>
    )
}
export default Header;