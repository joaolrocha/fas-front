import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormClient from './components/FormClient/FormClient';
import Login from './views/Login/Login';

import './_globalStyles.scss'

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
          element={<FormClient />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
