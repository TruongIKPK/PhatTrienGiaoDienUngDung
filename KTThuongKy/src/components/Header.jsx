import {Link} from 'react-router-dom'
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Contact from '../pages/Contact';
import { My_Hook_Order } from '../store/My_Hook_Order';
export const menuList = [
    {name:"Trang chủ", link:'/home', tagName:Home}, 
    {name:"Thực đơn", link:'/menu', tagName:Menu}, 
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
                            <li key={index}><Link className='text-xl !text-white hover:!underline' to={item.link}>{item.name}</Link></li>
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