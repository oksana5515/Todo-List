import React from 'react';
import { useTasks } from './TasksContext';
import Item from './Item';

const List = () => {
   const { tasks } = useTasks();

   return (
      <div>
         {tasks.map(task => (
            <Item key={task.id} task={task} />
         ))}
      </div>
   );
};

export default List;
