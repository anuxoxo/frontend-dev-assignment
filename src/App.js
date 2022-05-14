import './App.scss';
import BgContainer from './components/BgContainer/BgContainer'
import FormContainer from './components/FormContainer/FormContainer'

function App() {
  return (
    <div className="App">
      <main className="main_container">
        <BgContainer />
        <FormContainer />
      </main>
    </div>
  );
}

export default App;
