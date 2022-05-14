import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import BarChart from './components/BarChart/BarChart';
import BgContainer from './components/BgContainer/BgContainer'
import FormContainer from './components/FormContainer/FormContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <main className="main__container">
              <BgContainer />
              <FormContainer />
            </main>
          </div>
        } />
        <Route path="/graph" element={<BarChart />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
