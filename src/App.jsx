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
import EditJobPage from "./pages/EditJobPage";
import NotFound404Page from './pages/NotFound404Page';

const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method : 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method : 'DELETE'
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={< MainLayout />}>
          <Route index element={< HomePage />} />
          <Route path='/jobs' element={< JobsPage />} />
          <Route path='/jobs/:id' element={< JobPage deleteJob={ deleteJob } />} loader={ jobLoader } />
          <Route path='/jobs/add' element={< AddJobPage addJobSubmit={ addJob }/>} />
          <Route path='/jobs/edit/:id' element={< EditJobPage updateJobSubmit={ updateJob } />} loader={ jobLoader } />
          <Route path='*' element={< NotFound404Page />} />
      </Route>
  ));

  return <RouterProvider router={router} />;
};

export default App;