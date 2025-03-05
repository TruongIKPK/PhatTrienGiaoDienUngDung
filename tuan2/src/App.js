import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  const [num1,setNum1] = useState('');
  const [num2,setNum2] = useState('');
  const [phepTinh,setPhepTinh] = useState('+');
  const [ketQua,setKetQua] = useState(0);

  const handleChange1 = (e) => {
    setPhepTinh(e.target.value)
  }
  const handleChange2 = (e) => {
    setNum1(e.target.value)
  }
  const handleChange3 = (e) => {
    setNum2(e.target.value)
  }
  const handleClick = ()=> {
      if(phepTinh === '+')  setKetQua(Number(num1) + Number(num2));
      if(phepTinh === '-') setKetQua(Number(num1) - Number(num2));
      if(phepTinh === '*') setKetQua(Number(num1) * Number(num2));
      if(phepTinh === '/') setKetQua(Number(num1) / Number(num2));
  }

  return (
    <div className="App">
        <div>
          <input id="num1" onChange={handleChange2} />
        </div>
        <div>
          <input id="num2" onChange={handleChange3}  />
        </div>
        <div>
          <input id="phepTinh1" onChange={handleChange1} type="radio" name="fx" defaultChecked value={"+"} /> +
          <input id="phepTinh2" onChange={handleChange1} type="radio" name="fx" value={"-"}/> -
          <input id="phepTinh3" onChange={handleChange1} type="radio" name="fx" value={"*"}/> *
          <input id="phepTinh4" onChange={handleChange1} type="radio" name="fx" value={"/"}/> /
        </div>
        <div>
          <button onClick={handleClick}>Tính Toán</button>
        </div>
        <div>Kết quả là: {ketQua}</div>
  </div>
  );
}

export default App;
