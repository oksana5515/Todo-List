import React from 'react';

function Item({ task, toggleTask, deleteTask }) {
   return (
      <div className={`task ${task.done ? 'done' : ''}`}>
         <div className="task-left">
            <input
               type="checkbox"
               checked={task.done}
               onChange={() => toggleTask(task.id)}
            />
            <span className="task-text">{task.text}</span>
         </div>
         <button onClick={() => deleteTask(task.id)}>✕</button>
      </div>
   );
}

export default Item;