
import React from 'react';
import { useTasks } from './TasksContext';
import List from './List';
import Counter from './Counter.jsx';

const Main = () => {
   const { addTask } = useTasks();

   return (
      <div>
         <h1>Note your tasks</h1>
         <input
            type="text"
            placeholder="New task"
            onKeyDown={e => {
               if (e.key === 'Enter' && e.target.value.trim()) {
                  addTask(e.target.value.trim());
                  e.target.value = '';
               }
            }}
         />
         <Counter />
         <List />
      </div>
   );
};

export default Main;