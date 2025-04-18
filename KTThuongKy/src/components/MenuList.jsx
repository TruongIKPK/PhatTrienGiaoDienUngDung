import { useCallback, useEffect, useRef, useState } from "react";
import {My_Hook_Order} from "../store/My_Hook_Order"
function MenuList(){
    const [menu, setMenu] = useState([]);
    const productRef = useRef();
    const {listOrder, setlistOrder} = My_Hook_Order();
    const [isPreview, setIsPreview] = useState();
    
    // /src/data/menu.json
    useEffect(()=>{
        fetch('https://67da1c8d35c87309f52b0083.mockapi.io/name/Category')
        .then(item => item.json())
        .then(json => setMenu(json))
        .catch(error => console.log("Lỗi tải menu", error))
    },[])
    const handleClick_Info = useCallback((item) =>{
        setIsPreview(item)
    },[])
    console.log("Chay")
    const handleClick_add =useCallback((item) =>{
        console.log("Check thêm")
        setlistOrder((prevItem)=> [...prevItem, item])
    },[])
    
    console.log(productRef)
    console.log(listOrder)
    return(
       <div className="flex items-center justify-center m-5">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            {menu.map((item, index)=>(
                <div key={index} onClick={()=>{setIsPreview(isPreview?.id===item.id?null:item)}} className="rounded-xl p-5 shadow shadow-blue-200 cursor-pointer">
                    <img className="w-[350px] h-[200px] object-cover rounded-sm items-center mx-auto" src={item.avatar} alt=""/>
                    <div className="mx-auto mt-2">
                        <p className="text-2xl font-bold">{item.name}</p>
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-bold text-red-500">{item.price} VNĐ</p>
                            <button className="!bg-blue-500 !text-white hover:!bg-blue-300 transition max-w-full" 
                                onClick={(e)=>{
                                    e.stopPropagation()
                                    handleClick_add(item)
                                }
                                }>Thêm</button>
                        </div>
                        {isPreview?.id === item.id && (<p className="text-xl font-bold">{item.description}</p>)}
                    </div>
                </div>
            ))}
        </div>
       </div>
    )
}
export default MenuList;