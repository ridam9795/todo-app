import React, { useEffect, useState } from 'react'
import { TodoState } from '../Context/TodoContext'
import TodoItem from './TodoItem'
import './css/TodoList.css'
function TodoList() {
  const {listItem,SearchListItem}=TodoState();
  const [currentList,setCurrentList]=useState([...listItem]);
  useEffect(()=>{
   setCurrentList(listItem)
       console.log("TdoList: ",currentList)

  },[JSON.stringify(listItem)])
  const handleCompleted=(e)=>{
      e.preventDefault();
      console.log("completed -----");
      const data=[]
      listItem.map((item)=>{
        if(item.isCompleted){
          data.push(item)
        }
      })
      console.log("data: ",data);
      setCurrentList(data);
  }
  const handlePending=(e)=>
  {
    e.preventDefault();
      console.log("pending -----");
      const data=[]
      listItem.map((item)=>{
        if(!item.isCompleted){
          data.push(item)
        }
      })
      console.log("data: ",data);
      setCurrentList(data);

  }
  const handleAll=(e)=>{
        e.preventDefault();

       setCurrentList(listItem)

  }

  return (
    <div className="container">
     <ul className='nav'>
       <li>
         <a href="#" onClick={handleAll}>All</a> 
       </li>
       /
       <li>
         <a href="#" onClick={handleCompleted}>Completed</a>
       </li>
       /
        <li>
         <a href="#" onClick={handlePending}>Pending</a>
       </li>
     </ul>

      
      {currentList.map((item)=>{
        return(
          <TodoItem key={item.id} todoItem={item.todoItem} id={item.id} isCompleted={item.isCompleted}></TodoItem>
        )
      })}
     </div>
  ) 
}

export default TodoList