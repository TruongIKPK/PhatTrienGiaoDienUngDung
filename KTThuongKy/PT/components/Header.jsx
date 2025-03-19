
import Logo from '../assets/chefify.png'
import Avt from '../assets/avatar.png'

const nav = ['Trang chủ', 'Thực đơn', 'Liên hệ'];

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm z-50">
            {nav.map((text, idex) => (
                <nav className='hidden md:flex space-x-6 !text-gray-700 mr-3' key={idex}>
                    <a 
                        href="#" 
                        className="!text-gray-400 !hover:text-pink-500"
                    >
                        {text}
                    </a>
                </nav>
            ))}

          
            <button className="flex items-center px-4 py-2 text-pink-500 border !border-pink-500 ml-5">
                Book Table
            </button>
        </header>
    );
  }
  
  export default Header;