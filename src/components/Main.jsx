/*import { useState, useEffect } from "react";
import List from "./List";
import { useTasks } from './TasksContext';
const Main = () => {
   const [tasks, setTasks] = useState(() => {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
   });

   const [input, setInput] = useState("");

   useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);

   const addTask = () => {
      if (input.trim() === "") return;
      const newTask = {
         id: Date.now(),
         text: input,
         done: false,
         createdAt: new Date().toLocaleString(),
      };
      setTasks([newTask, ...tasks]);
      setInput("");
   };

   const toggleTask = (id) => {
      setTasks(
         tasks.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task
         )
      );
   };

   const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
   };


   return (
      <main className="main">
         <h1>Note your tasks</h1>
         <p>{new Date().toLocaleDateString("en-US", { dateStyle: "long" })}</p>

         <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Task name"
         />
         <List tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </main>
   );
};

export default Main;*/
import React from 'react';
import { useTasks } from './TasksContext';
import List from './List';
import Counter from './Counter';

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