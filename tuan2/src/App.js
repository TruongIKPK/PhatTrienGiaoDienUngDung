import logo from './logo.svg';
import './App.css';
import 
function App() {

  const [num1,setNum1] = useState('');
  const [num2,setNum2] = useState('');
  const [phepTinh,setPhepTinh] = useState('+');
  const [ketQua,setKetQua] = useState(0);

  return (
    <div className="App">
        <div>
          <input id="num1" bg-te/>
        </div>
        <div>
          <input id="num2" />
        </div>
        <div>
          <input id="phepTinh1" type="radio" name="fx" defaultChecked /> +
        
          <input id="phepTinh2" type="radio" name="fx" /> -
        
          <input id="phepTinh3" type="radio" name="fx" /> *
        
          <input id="phepTinh4" type="radio" name="fx" /> /
        </div>
        <div>
          <button>Tính Toán</button>
        </div>
        <div>Kết quả là: {ketQua}</div>
  </div>
  );
}

export default App;
