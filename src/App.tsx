import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';

import './_globalStyles.scss';
import Dashboard from './views/Dashboard/Dashboard';
import ListClients from './views/ListClients/ListClients';
import ListFeatures from './views/ListFeatures/ListFeatures';
import ListProjects from './views/ListProjects/ListProjects';
import RegisterClient from './views/RegisterClient/RegisterClient';
import RegisterFeatures from './views/RegisterFeatures/RegisterFeatures';
import RegisterProject from './views/RegisterProject/RegisterProject';

function App() {
  return (
    <BrowserRouter basename='/fas-front/build'>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />

        <Route
          path='/dashboard'
          element={<Dashboard />}
        />

        <Route
          path='/listclients'
          element={<ListClients />}
        />

        <Route
          path='/registerclient'
          element={<RegisterClient />}
        />

        <Route
          path='/listprojects'
          element={<ListProjects />}
        />

        <Route
          path='/registerprojects'
          element={<RegisterProject />}
        />

        <Route
          path='/listfeatures'
          element={<ListFeatures />}
        />

        <Route
          path='/registerfeatures'
          element={<RegisterFeatures />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
