import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router';
import './style/reset.css';
import './style/guide.css';
// import './style/style.css';
import 'baro_css/src/style/style.css';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
