
import './App.css';
import { AuthContextProvider } from './store/AuthContext';
import Header from './views/header/Header';
import Mainlayout from './views/MainLayout/Mainlayout';



function App() {

  return (
    <div className="App" >

      <AuthContextProvider >
        <Header />
        <Mainlayout />
      </AuthContextProvider>

    </div>
  );
}

export default App;
