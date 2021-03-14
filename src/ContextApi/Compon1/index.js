import React,{useContext} from 'react'
import {NumberContext} from './../../App'
// const Contextdata = useContext(Contextdata);
// link https://daveceddia.com/usecontext-hook/
const Compon1 = () => {
    
    const value = useContext(NumberContext);
    return (
     

  
    <div>The answer is {value}.</div>
 
    )
}

export default Compon1
