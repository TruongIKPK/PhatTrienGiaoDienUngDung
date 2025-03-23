import {My_Hook_Order} from "../store/My_Hook_Order"
function BookTable(){
    const {listOrder, setlistOrder} = My_Hook_Order();
    return(   
        <div>
            {listOrder.length > 0 ? (
                listOrder.map((item, index) => (
                    <div key={index} className="m-5 p-5 rounded-xl shadow shadow-blue-200">
                        <img className="w-[350px] h-[200px] object-cover rounded-sm items-center mx-auto" src={item.image} alt=""/>
                        <div className="w-[350px] mx-auto mt-2">
                            <p className="text-2xl font-bold">{item.name}</p>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-bold text-red-500">{item.price} VNĐ</p>
                                <button
                                    className="!bg-red-500 !text-white hover:!bg-blue-300 transition"
                                    onClick={() => setlistOrder(listOrder.filter(order => order!==item))}
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">Chưa có món nào được đặt</p>
            )}
        </div>
    )
}
export default BookTable;