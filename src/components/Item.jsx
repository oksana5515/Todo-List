import React, { useState } from 'react';
import { useTasks } from './TasksContext';

function Item({ task }) {
   const { toggleTask, deleteTask, editTask } = useTasks();
   const [isEditing, setIsEditing] = useState(false);
   const [editText, setEditText] = useState(task.text);

   const handleEditSubmit = () => {
      if (editText.trim()) {
         editTask(task.id, editText.trim());
      }
      setIsEditing(false);
   };

   return (
      <div className={`task ${task.done ? 'done' : ''}`}>
         <div className="task-left">
            <input
               type="checkbox"
               checked={task.done}
               onChange={() => toggleTask(task.id)}
            />

            {isEditing ? (
               <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={handleEditSubmit}
                  onKeyDown={(e) => {
                     if (e.key === 'Enter') handleEditSubmit();
                     if (e.key === 'Escape') {
                        setIsEditing(false);
                        setEditText(task.text);
                     }
                  }}
                  autoFocus
               />
            ) : (
               <span className="task-text">{task.text}</span>
            )}
         </div>

         <div className="task-actions">
            <span className="task-date">Added: {task.createdAt}</span>
            <button className="editButton" onClick={() => setIsEditing(true)}>✎</button>
            <button onClick={() => deleteTask(task.id)}>✕</button>
         </div>
      </div>
   );
}

export default Item;
