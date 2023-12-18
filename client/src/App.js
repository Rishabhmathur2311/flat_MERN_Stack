import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import SignUp from './SignUp/SignUp';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import SingleFlat from './SingleFlat';
import ChatWithOwner from './ChatWithOwner';
import Intro from './components/Intro';
import OwnerStart from './components/ownerTab/OwnerStart';
import HeadPage from './components/ownerTab/HeadPage';
import SignUpStart from "./SignUp/SignUpStart.js";
import ChatForOwner from './ChatForOwner.js';
import ChatWithBuyer from './ChatWithBuyer.js';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/owner" element={<OwnerStart />} />
        <Route path="/buyer" element={<SignUpStart />} />
        <Route path="/mainPage" element={<HeadPage />} />
        <Route path="/singleFlat/:id" element={<SingleFlat />} />
        <Route path="/chatowner/:id" element={<ChatWithOwner />} />
        <Route path='/chatForOwner/:id' element={<ChatForOwner />} />
        <Route path='/chatWithBuyer/:id' element={<ChatWithBuyer />} />
        </Routes>        
      </Router>
    </ChakraProvider>
  );
}

export default App;
