import { useState } from 'react';

function TinhLoiNhuan(){

    const [tienGuiVao,setTienGuiVao] = useState(0);
    const [laiSuat,setLaiSuat] = useState(0);
    const [tienNhanDuoc,setTienNhanDuoc] = useState(0);
    const [dsNam,setDsNam] = useState([]);

    const handleChange1 = (e) => {
        setTienGuiVao(e.target.value)
    }
    const handleChange2 = (e) => {
        setLaiSuat(e.target.value)
    }
    const handleChange3 = (e) => {
        setTienNhanDuoc(e.target.value)
    }

    const handleClick = () => {
        setDsNam(tinhLaiKepDenMucTieu(Number(tienGuiVao), Number(laiSuat),1,Number(tienNhanDuoc)));
    }

    function tinhLaiKepDenMucTieu(P, r, n, mucTieu) {
        let nam = new Date().getFullYear();
        let A = P;
        let history = [];
        console.log("Nam nay la"+nam);
        while (A < mucTieu) {
            A = A * Math.pow((1 + r / (n * 100)), n);
            nam++;
            history.push({ nam, tongTien: A.toFixed(2) });
        }
        return history;
    }

    return(
        <>
            <div>Nhập tiền gửi vào:<input id="guiVao" type="text"     onChange={handleChange1}/></div> 
            <div>Nhập lãi suất/năm:<input id="laisuat" type="text"    onChange={handleChange2}/></div> 
            <div>Nhập tiền muốn nhận:<input id="nhanDuoc" type="text" onChange={handleChange3}/></div> 
            <div>
                <button onClick={handleClick}>Tính Lãi Suất</button>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Năm</th>
                        <th>Tiền nhận được</th>
                    </tr>
                    {dsNam.map((r,i)=>{
                        return(
                            <tr key={i}>
                                <td>{r.nam}</td>
                                <td>{r.tongTien}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>
    )
}
export default TinhLoiNhuan;