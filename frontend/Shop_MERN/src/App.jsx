import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login, SignUp } from './routs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/activation/:url" element={<Activation />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
