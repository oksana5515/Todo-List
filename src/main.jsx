import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './components/Main.jsx'
import './components/Main.css'
import { TasksProvider } from './components/TasksContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TasksProvider>
      <Main />
    </TasksProvider>
  </StrictMode>,
)
