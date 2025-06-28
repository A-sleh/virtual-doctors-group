import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import "@/assets/scss/main.css"
import App from '@/app';


const root = document.getElementById('root');
if (!root) throw new Error('No root element found');
else createRoot(root).render(
    <App />
);
