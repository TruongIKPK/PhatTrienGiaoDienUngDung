import { useState, useReducer, useEffect, useCallback } from "react";
import { My_Hook_Order } from "../store/My_Hook_Order";
function reducer(state, action) {
    switch (action.type) {
        case "SET_QUERY":
            return { ...state, query: action.payload };
        case "SET_MENU":
            return { ...state, dsSP: action.payload };
        case "FILTER_PRODUCTS":
            return {
                ...state,
                dsSP: action.payload.filter((p) =>
                    p.name.toLowerCase().includes(state.query.toLowerCase())
                )
            };
        default:
            return state;
    }
}

function Starter() {
    const [state, dispatch] = useReducer(reducer, {
        query: "",
        dsSP: []
    });

    const [menu, setMenu] = useState([]);
    const {listOrder, setlistOrder} = My_Hook_Order();
    useEffect(() => {
        fetch('https://67da1c8d35c87309f52b0083.mockapi.io/name/Category')
            .then((res) => res.json())
            .then((data) => {
                setMenu(data);
                dispatch({ type: "SET_MENU", payload: data });
            })
            .catch((error) => console.log("Lỗi tải menu", error));
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value;
        dispatch({ type: "SET_QUERY", payload: query });
        dispatch({ type: "FILTER_PRODUCTS", payload: menu });
    };
    const handleClick_add =useCallback((item) =>{
        console.log("Check thêm")
        setlistOrder((prevItem)=> [...prevItem, item])
    },[])
    return (
        <>
            <input
                value={state.query}
                onChange={handleSearch}
                type="text"
                placeholder="Tìm kiếm..."
                className="top-7 left-120 fixed px-3 py-1 bg-white rounded-lg 
                border border-gray-300 focus:outline-none"
            />
            <div className="flex items-center justify-center m-5">
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
                    {/* {state.dsSP.map((item, index)=>(
                        
                    ))} */}
                </div>
            </div>
        </>
    );
}
export default Starter;
