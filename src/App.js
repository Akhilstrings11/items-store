import logo from './logo.svg';
import './App.css';
import UploadImage from './components/UploadImage';
import 'bootstrap/dist/css/bootstrap.css'
import DisplayImages from './components/DisplayImages';

function App() {
  return (
    <div className="App">
        <UploadImage />
        {/* <DisplayImages /> */}
    </div>
  );
}

export default App;
