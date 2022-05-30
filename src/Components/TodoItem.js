import React, { useState } from 'react'
import './css/TodoItem.css'
import edit from '../../src/edit.png';
import trash from '../../src/trash.png';
import { TodoState } from '../Context/TodoContext';

function TodoItem(props) {
   const id=props.id;
   const todoItem=props.todoItem;
  const [isEditMode,setIsEditMode]=useState(false);
  const {listItem,SetListItem} = TodoState();
   const [checked,setChecked]=useState(false);
   const [update,setUpdate]=useState(props.todoItem);

   console.log("---------------------------------",props.isCompleted)
  const handleCheckbox=(e)=>{
    console.log("checked: ",checked);
      const data=[];
     listItem.map((item,index)=>{
       if(item.id==id){
         console.log("id: ",id);
          data.push({id:item.id,todoItem:update,isCompleted:!item.isCompleted})
       }else{
         data.push({id:item.id,todoItem:item.todoItem,isCompleted:item.isCompleted})
       }
     })
           setChecked(!checked)

     SetListItem(data);
      
  }
  const handleEdit=()=>{
        setIsEditMode(true);
  }
  const handleDelete=()=>{
     const data=listItem.filter((item)=>{
        return item.id!=id;
     })
     SetListItem(data);

  }
  const handleKey=(e)=>{
    if(e.key=="Enter"){
      handleUpdate();
    }
  }
  const handleUpdate=()=>{
     const data=[];

     listItem.map((item,index)=>{
       if(item.id==id){
         console.log("id: ",id);
          data.push({id:item.id,todoItem:update,isCompleted:item.isCompleted})
       }else{
         data.push({id:item.id,todoItem:item.todoItem,isCompleted:item.isCompleted})
       }
     })
     console.log("data",data);
     SetListItem(data);
          setIsEditMode(false);

     console.log(listItem)
  }

    console.log("todoItem: >>>>>>>>> ",props)
  return (
  <div>
    
    <div className='todoItem'>
         {isEditMode?(<div className='todoItemContent'><input type="text" className='updateField' value={update} onChange={(e)=>setUpdate(e.target.value)} onKeyUpCapture={handleKey} /> <button className='updateButton' onClick={handleUpdate} >Update</button></div>)
         :( <div className='todoItemContent'>
            <input type="checkbox" className='checkbox' onChange={handleCheckbox} checked={props.isCompleted}/> 
             <div className={props.isCompleted?'done':''}>{props.todoItem}</div>
            <img  className="editIcon" src={edit} alt="edit" onClick={handleEdit}/>
            <img className='trashIcon' src={trash} alt="delete" onClick={handleDelete} />
        </div>)}
         
    </div>
  </div>
    
  )
}

export default TodoItem