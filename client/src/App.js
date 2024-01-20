
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { FindGroup } from './pages/FindGroup';
import { Chat } from './pages/Chat';
import { VideoCall } from './pages/VideoCall';



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findgroup" element={<FindGroup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/videocall" element={<VideoCall />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;