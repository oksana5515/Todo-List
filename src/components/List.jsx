import Item from "./Item";

const List = ({ tasks, toggleTask, deleteTask }) => {
   return (
      <ul className="task-list">
         {tasks.map((task) => (
            <Item
               key={task.id}
               task={task}
               toggleTask={toggleTask}
               deleteTask={deleteTask}
            />
         ))}
      </ul>
   );
};

export default List;
