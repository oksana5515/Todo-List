import React from 'react';
import { useTasks } from './TasksContext';

const Counter = () => {
   const { tasks } = useTasks();

   const remainingCount = tasks.filter(task => !task.done).length;

   return (
      <div className="counter">
         You have {remainingCount} tasks left.
      </div>
   );
};

export default Counter;
