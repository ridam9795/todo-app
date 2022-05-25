import { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import addIcon from '../src/add.png'
import searchIcon from '../src/searchIcon.png'
import { TodoState } from './Context/TodoContext';

function App() {
   const {listItem,SetListItem,itemCount,setItemCount} = TodoState();
  const [search,setSearch]=useState("");
  const [add,setAdd]=useState("");

  const [isSearch,setIsSearch]=useState(false);
  const handleAdd=(e)=>{
    setAdd(e.target.value);
    if(search.lenght!==0){
      setSearch("");
    }
    
  }
  const addItem=(e)=>{
    if(e.key==="Enter"){
      console.log("Enter pressed",e.key)
      if(add.length===0){
        return;
      }
      setAdd("")
      setItemCount(itemCount+1)
      SetListItem([...listItem,{id:itemCount,todoItem:add}]);
      console.log("listItem: >  ",listItem)
      console.log("cnt: ",itemCount)
    }
  }
  const handleSearch=(e)=>{
    console.log("search value   "+e.target.value)
          setSearch(e.target.value);
          setAdd("");

          

  }
  return (
    <div className="App">
        <div className='todo'>
            <div className='content'>
              <p className='title'>
              THINGS TO DO

              </p>
              {isSearch?( <input 
               type="text" 
               className='Input' 
               value={search} 
               onChange={handleSearch} 
                placeholder='Search' />)
                :( <input 
               type="text" 
               className='Input' 
                placeholder='Add Item' 
                onChange={handleAdd}
                onKeyUpCapture={addItem}
                value={add}
                
                />)}
                                 
                
                <TodoList />
                <div className='footer'>
  <img src={searchIcon} className="searchIcon" alt="search..." onClick={()=>{setIsSearch(true)}} />

               <img src={addIcon} className="addIcon"  onClick={()=>{setIsSearch(false)}} alt="add..." ></img>

                </div>
            


              </div>


        </div>
    </div>
  );
}

export default App;
