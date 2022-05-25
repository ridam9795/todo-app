import React from 'react'
import './css/TodoItem.css'

function TodoItem(props) {
    console.log("todoItem: >>>>>>>>> ",props)
  return (
    <div className='todoItem'>
        <div>
          <input type="checkbox" />  {props.todoItem}
          
        </div>
    </div>
  )
}

export default TodoItem