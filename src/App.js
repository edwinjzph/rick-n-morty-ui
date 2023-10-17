import './App.css';
import { AuthContextProvider } from './store/AuthContext';
import Header from './views/header/Header';
import Mainlayout from './views/MainLayout/Mainlayout';
import React from 'react';

function App() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App" >

      <AuthContextProvider >
        <Header checked={checked} handleChange={handleChange} />
        <Mainlayout checked={checked} />
      </AuthContextProvider>



    </div>
  );
}

export default App;
