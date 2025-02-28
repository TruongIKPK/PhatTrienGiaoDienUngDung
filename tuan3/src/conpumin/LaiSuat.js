
import { useState} from "react";
function LaiSuat(){

    const [tienGuiVao, setTienGuiVao] = useState('')
    const [laiSuat, setLaiSuat] = useState('')
    const [tienMongMuon, setTienMongMuon] = useState('')
    //const [results, setResults] = useState("")
    const results = [];

    const handleTienGuiVao = (e) => {
        setTienGuiVao(e.target.value)
        console.log(tienGuiVao)
    }
    const handleLaiSuat = (e) => {
        setLaiSuat(e.target.value)
        console.log(laiSuat)
    }
    const handleTienMongMuon = (e) => {
        setTienMongMuon(e.target.value)
        console.log(tienMongMuon)
    }

    // const handleResults  = (e) => {
    //     setResults(e.target.value)
    // }

    const handleTinhToan = () => {
        results = tinhLaiKepDenMucTieu(tienGuiVao, laiSuat, 1, tienMongMuon);
    }

    function tinhLaiKepDenMucTieu(P, r, n, mucTieu) {
        let nam = 0;
        let A = P;
        let history = [];
    
        while (A < mucTieu) {
            A = A * Math.pow((1 + r / (n * 100)), n);
            nam++;
            history.push({ nam, tongTien: A.toFixed(2) });
        }
    
        return history;
    }

    return(
       <div id = "ls">
            <div id = "input-group">
                <lable>Số tiền gửi</lable>
                <input 
                    type = "text"
                    value={tienGuiVao}
                    placeholder="VND"
                    onChange={handleTienGuiVao} 
                />
            </div>
            <br/>
            <div id = "input-group">
                <label>Lãi suất gửi </label> 
                <input 
                    type = "text"
                    value={laiSuat}
                    placeholder="%/năm"
                    onChange={handleLaiSuat}
                />
            </div>
            <br/> 
            <div id = "input-group">
                <lable>Tiền gửi mong muốn </lable>
                <input 
                    type = "text"
                    value={tienMongMuon}
                    placeholder="VND"
                    onChange={handleTienMongMuon}
                />
            </div>
            <br/> 
            <button id = "tinhLaiSuat" onClick={handleTinhToan}>
                Tính lãi suất
            </button>
            <table id = "result" onChange={handleResults}>
                <thead>
                    <tr>
                        <th>Năm {results}</th>
                        <th>Tổng tiền tích lũy {results}</th>
                    </tr>
                    {results.map((r, i) => {
                        <tr>
                            <td key={i}> <dd/>
                        </tr>
                    })}
                </thead>
            </table>
       </div>
    )
}
export default LaiSuat;