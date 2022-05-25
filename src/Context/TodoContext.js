import React, { useContext, useState } from 'react'

const todoContext=React.createContext();
const TodoContext=({children})=>{
    const [listItem,SetListItem]=useState([]);
      const [itemCount,setItemCount]=useState(0);

    return (
        <todoContext.Provider
         value={{
             listItem,
             SetListItem,
             itemCount,
             setItemCount
         }}
        >
            {children}
        </todoContext.Provider>
    )
}
export const TodoState=()=>{
    return useContext(todoContext);
}

export default TodoContext
