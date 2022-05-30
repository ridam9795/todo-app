import React, { useEffect } from 'react'
import { TodoState } from '../Context/TodoContext';
import './css/SearchList.css';
import SearchItem from './SeachItem'
function SearchList() {
    const {SearchListItem,setSearchListItem}=TodoState();


  return (
    <div className="container">

        {SearchListItem.length>0 && SearchListItem.map((item)=>{
        return(
          <SearchItem key={item.id} todoItem={item.todoItem} id={item.id} isCompleted={item.isCompleted}></SearchItem>
        )
      })}
    </div>
  )
}

export default SearchList