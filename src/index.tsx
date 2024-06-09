import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {App} from '@/app';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root не найден');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/page1',
        element: <h1>PAGE 1</h1>
      },
      {
        path: '/page2',
        element: <h1>PAGE 2</h1>
      }
    ]
  }
]);

container.render(<RouterProvider router={router} />);
