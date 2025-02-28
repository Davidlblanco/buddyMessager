import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {
    // BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/buddyMessager',
        element: <App />,
    },
    {
        path: '/',
        element: <App />,
    },
]);
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* <BrowserRouter> */}
        <RouterProvider router={router} />
        {/* </BrowserRouter> */}
    </StrictMode>,
);
