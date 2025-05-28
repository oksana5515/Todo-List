import { createContext, useContext, useState, useEffect } from 'react';

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

const TASKS_STORAGE_KEY = 'my_tasks';

export const TasksProvider = ({ children }) => {
   // Загружаем из localStorage или ставим пустой массив
   const [tasks, setTasks] = useState(() => {
      const saved = localStorage.getItem(TASKS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
   });

   // Сохраняем задачи в localStorage при каждом изменении tasks
   useEffect(() => {
      localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
   }, [tasks]);

   const addTask = (text) => {
      const newTask = {
         id: Date.now(),
         text,
         done: false,
         createdAt: new Date().toLocaleString(),
      };
      setTasks(prev => [...prev, newTask]);
   };

   const toggleTask = (id) => {
      setTasks(prev =>
         prev.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
         )
      );
   };

   const deleteTask = (id) => {
      setTasks(prev => prev.filter(task => task.id !== id));
   };
   const editTask = (id, newText) => {
      setTasks(prev =>
         prev.map(task =>
            task.id === id ? { ...task, text: newText } : task
         )
      );
   };


   return (
      <TasksContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, editTask }}>
         {children}
      </TasksContext.Provider>
   );
};
