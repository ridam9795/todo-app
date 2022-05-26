import React, { useState } from 'react'
import './css/TodoItem.css'
import edit from '../../src/edit.png';
import trash from '../../src/trash.png';
import { TodoState } from '../Context/TodoContext';

function TodoItem(props) {
   const id=props.id;
   const todoItem=props.todoItem;
   const [checked,setChecked]=useState(false);

    console.log("todoItem: >>>>>>>>> ",props)
  return (
  <div>
    
    <div className='todoItem'>
        <div className='todoItemContent'>           
             <div className={checked?'done':''}>{todoItem}</div>
        </div>
         
         
    </div>
  </div>
    
  )
}

export default TodoItem