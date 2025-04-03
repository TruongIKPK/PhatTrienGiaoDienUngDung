import logo from './logo.svg';
import './App.css';
import MayTinh from './components/MayTinh';
import RenderList from './components/List';

function App() {
  return (
    <div className="App">
      <RenderList />
      <MayTinh/>
    </div>
  );
}

export default App;