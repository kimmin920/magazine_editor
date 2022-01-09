import { Routes, Route, Link, Outlet, BrowserRouter } from 'react-router-dom';
import { Carousel } from './Carousel';

import Home from './Home';
import JsonViewerAndEditor from './JsonViewerAndEditor';
import { MagazineList } from './MagazineList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/magazine' element={<MagazineList />} />
        <Route path='/json_viewer' element={<JsonViewerAndEditor />} />
        <Route path='/carousel' element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
