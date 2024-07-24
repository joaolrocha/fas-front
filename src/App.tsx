import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';

import './_globalStyles.scss';
import Dashboard from './views/Dashboard/Dashboard';
import ListClients from './views/ListClients/ListClients';
import RegisterClient from './views/RegisterClient/RegisterClient';

function App() {
  return (
    <BrowserRouter>
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
