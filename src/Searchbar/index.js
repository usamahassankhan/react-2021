import React,{useState} from 'react';
import Data from './MOCK_DATA.json'

const Search = () => {
    const [data,setData]=useState();
    console.log(Data)
    return (
        <div>
            <input type="text" onChange={(e)=> setData(e.target.value)} />
            {
                Data.filter((a)=>{
                    if (data===""){
                        return a
   }
                    else if(a.first_name.toLowerCase().includes(data?.toLowerCase()))
                    {
                        return a
                    }
                }).map((ans)=><p>{ans.first_name}</p>
                    
                    
                
                

        

                )
            }
        </div>
    )
}

export default Search
