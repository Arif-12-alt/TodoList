import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='todo'>
      <p onClick={()=>toggleComplete(task.id)} className={`${task.complete ? 'complete':''}`}>{task.task} </p>
      <div className='icon'>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)} className='edit-icon'/>
        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)} className='delete-icon'/>
      </div>
    </div>
  )
}

export default Todo
