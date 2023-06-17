import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { RootLayout } from './pages/Root';
import { Home } from './pages/Home';
import { Suspense } from 'react';
import { Post } from './pages/Post';
import { Blog } from './pages/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Blog/>
              </Suspense>
            ),
            loader: () =>
              import('./pages/Blog').then((module) => module.loader()),
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <Post />
              </Suspense>
            ),
            loader: (meta) =>
              import('./pages/Post').then((module) => module.loader(meta)),
          }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
