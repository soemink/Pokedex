import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import DexEntry from './pages/DexEntry/DexEntry.js';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/poke" element={<DexEntry />} />
    </Routes>
  )

}

export default AppRouter;