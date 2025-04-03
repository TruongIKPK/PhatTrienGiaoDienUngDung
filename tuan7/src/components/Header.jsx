function Header(){
    return (
        <>
            <div className="header flex items-center justify-between">
                <p className="font-bold text-pink-700">Dashboard</p>
                <div className="flex items-center">
                    <img src="src/assets/Search.png" className="h-3" alt="" />
                    <input type="text" placeholder="Vui lòng nhập" />
                    <img src="src/assets/Bell 1.png" className="h-8" alt="" />
                    <img src="src/assets/Question 1.png" className="h-8" alt="" />
                    <img src="src/assets/Avatar (1).png" className="h-8" alt="" />
                </div>
            </div>
        </>
    )
}
export default Header;