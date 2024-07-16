import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './app.scss';
import ThemeProvider from './context/context';
import RootLayout from './layout/RootLayout';
import Error from './screens/error/Error';
import Loading from './screens/loading/Loading';
const Home = lazy(() => import('./screens/home/Home'));
const Skills = lazy(() => import('./Components/skills/Skills'));
const Projects = lazy(() => import('./Components/projects/Projects'));
const About = lazy(() => import('./Components/about/About'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />

      <Route
        path="skills"
        element={
          <Suspense fallback={<Loading />}>
            <Skills />
          </Suspense>
        }
      />

      <Route
        path="projects"
        element={
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        }
      />

      <Route
        path="about"
        element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        }
      />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
