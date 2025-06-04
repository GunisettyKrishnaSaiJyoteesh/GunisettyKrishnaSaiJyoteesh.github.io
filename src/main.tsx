import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ViewAllProjects from './pages/ViewAllProjects';

<Route path="/projects/all" element={<ViewAllProjects />} />
import { BrowserRouter as Router, Route } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(<App />);
