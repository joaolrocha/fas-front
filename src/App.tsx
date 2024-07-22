import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
