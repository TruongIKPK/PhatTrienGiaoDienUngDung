import React, { useState, useEffect } from 'react';

const MonAn = [
    {hinhAnh:'src/assets/archive_check.png', tenMon:"Cà ri1", gia:100000, mota:"Món cà ri với hương vị đặc biệt, rất thơm và ngon."},
    {hinhAnh:'src/assets/avatar.png', tenMon:"Cà ri2", gia:100000, mota:"Món cà ri với vị cay nhẹ và đậm đà."},
    {hinhAnh:'src/assets/Frame.png', tenMon:"Cà ri3", gia:100000, mota:"Món cà ri truyền thống với gia vị đặc trưng."},
    {hinhAnh:'src/assets/react.svg', tenMon:"Cà ri4", gia:100000, mota:"Cà ri với hương vị đặc biệt, kết hợp giữa các gia vị."},
];
function Main() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedDetail, setSelectedDetail] = useState(null); 

    const handleBuyClick = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item.tenMon]);
    setSelectedDetail(item); 
    };
    useEffect(() => {
        console.log("Danh sách món đã chọn:", selectedItems);
    }, [selectedItems]);

    return (
        <>
            <div className="mt-30 flex" id="section">
                <div className="flex-1 flex flex-col items-center text-center">
                    <div className="items-center text-center">
                        {MonAn.map((item, index) => (
                            <div className="flex space-x-5" key={index}>
                                <img src={item.hinhAnh} alt={item.tenMon} />
                                <h4>{item.tenMon}</h4>
                                <p>{item.gia}</p>
                                <p>{item.mota}</p>
                                <button onClick={() => handleBuyClick(item)}>Mua</button>
                            </div>
                        ))}
                    </div>
                
                    <div>
                        <h3>Danh sách món đã chọn:</h3>
                        <ul>
                            {selectedItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {selectedDetail && (
                        <div className="mt-5">
                            <img src={selectedDetail.hinhAnh} alt="" />
                            <h3>Thông tin chi tiết:</h3>
                            <h4>{selectedDetail.tenMon}</h4>
                            <p>{selectedDetail.mota}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Main;
