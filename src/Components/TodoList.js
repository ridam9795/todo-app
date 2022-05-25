import React from 'react'
import { TodoState } from '../Context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
  const {listItem}=TodoState();
  console.log("TdoList: ",listItem)
  return (
    <div className="container">
      {listItem.map((item)=>{
        return(
          <TodoItem key={item.id} todoItem={item.todoItem} id={item.id}></TodoItem>
        )
      })}
     </div>
  ) 
}

export default TodoList