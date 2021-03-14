import logo from './logo.svg';
import Searchbar from './Searchbar';
import C from './Props/C1';
import './App.css';
import React,{createContext} from 'react';
import Compon1 from './ContextApi/Compon1/index';
// const NumberContext = React.createContext();
const NumberContext=createContext();
function App() {
  
  return (
    <>
    <NumberContext.Provider value={"dasdadsadsa"}>
  
   <Searchbar/>
   <C/>
<Compon1/>
      </NumberContext.Provider>
   </>
  );
}

export default App;
export {NumberContext};
