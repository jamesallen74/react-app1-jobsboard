import { 
	Route, 
	createBrowserRouter, 
	createRoutesFromElements, 
	RouterProvider, } 
from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import JobPage, { jobLoader } from './pages/JobPage';
import NotFound404 from './pages/NotFound404';

const App = () => {

  const addJob = async (newJob) => {
    // console.log(newJob);
    const res = await fetch('api/jobs', {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage/>} />
        <Route path='/jobs' element={<JobsPage/>} />
        <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='*' element={<NotFound404/>} />
    </Route>
  ));

  return <RouterProvider router={router} />;
};

export default App