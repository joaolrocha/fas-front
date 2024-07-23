import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';

import './_globalStyles.scss';
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
          path='/registerclient'
          element={<RegisterClient />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
